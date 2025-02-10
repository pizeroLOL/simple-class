<script setup lang="ts">
import { computed, ref } from 'vue'
import type {
  CsesConfig as CsesType,
  Config as ConfigType,
  Schedule as SceduleType,
  TempSchedule,
  TempClass,
} from './types'
import Cses from '../cses.json'
import Config from '../config.json'

const rawCses = Cses as CsesType
const timeFromString = (s: string) =>
  s
    .split(':')
    .map(Number)
    .reduce(
      (acc, now, index) => (index == 0 ? 60 * 60 * now : index == 1 ? acc + now * 60 : acc + now),
      0,
    )

const defaultClass = {
  subject: '无课',
  startTime: 0,
  endTime: 24 * 60 * 60 - 1,
  teacher: '无老师',
  room: '教室',
}

const schedules = rawCses.schedules.map((it) => ({
  ...it,
  classes: (() => {
    const tmp = it.classes
      .map((it) => {
        const subjectInfo = rawCses.subjects.find((subject) => it.subject == subject.name)
        return {
          subject: it.subject,
          startTime: timeFromString(it.start_time),
          endTime: timeFromString(it.end_time),
          teacher: subjectInfo?.teacher ?? '无老师',
          room: subjectInfo?.room ?? '教室',
        }
      })
      .sort((a, b) => a.startTime - b.startTime)
      .reduce((acc, now) => {
        // 修正
        if (now.endTime < now.startTime) {
          now.endTime = now.startTime
        }
        if (now.endTime > 24 * 60 * 60) {
          now.endTime = 24 * 60 * 60 - 1
        }
        // 补前
        if (acc.length == 0) {
          return now.startTime == 0
            ? [now]
            : acc.concat([{ ...defaultClass, endTime: now.startTime }, now])
        }
        const back = acc[acc.length - 1]
        // 修正
        if (back.startTime == back.endTime || back.endTime > now.startTime) {
          // 修改 back 指向 arr 中的值
          back.endTime = now.startTime
          return acc.concat(now)
        }
        if (back.endTime == now.startTime) {
          return acc.concat(now)
        }
        return acc.concat([
          { ...defaultClass, subject: '下课', startTime: back.endTime, endTime: now.startTime },
          now,
        ])
      }, [] as TempClass[])
    // 补后
    return tmp.length == 0
      ? [defaultClass]
      : tmp[tmp.length - 1].endTime < 24 * 60 * 60 - 1
        ? tmp.concat({ ...defaultClass, startTime: tmp[tmp.length - 1].endTime })
        : tmp
  })(),
}))

const startUTC = new Date((Config as ConfigType).start).getUTCMilliseconds()
const csesWeekdayToDate = (n: number) => (n == 7 ? 0 : n)
const getOddOrEven = (bigger: number, smaller: number) =>
  ['odd', 'even'][Math.floor((bigger - smaller) / (7 * 24 * 60 * 60 * 1000)) % 2] as 'odd' | 'even'
const getNow = (oddOrEven: 'odd' | 'even', schedules: TempSchedule[]) => {
  if (schedules.length <= 1) {
    return schedules.length == 0 ? [defaultClass] : schedules[0].classes
  }
  // schedules.lenght > 1
  const oddOrEvenSchedule = schedules.find((it) => it.weeks == oddOrEven)
  if (oddOrEvenSchedule != undefined) {
    return oddOrEvenSchedule.classes
  }
  const allSchedule = schedules.find((it) => it.weeks == 'all')
  if (allSchedule != undefined) {
    return allSchedule.classes
  }
  // 找不到复合 odd/even 和 all 的
  console.error("can't find odd/even or all schedule")
  return [defaultClass]
}

const nowClasses = ref([{ value: defaultClass, index: 0 }])
const nowTime = ref("00:00:00")
const nowTimeNumber = ref('00:00:00')
const timePad = (num: number) => num.toString().padStart(2, '0')
const formatTime = (num: number) => `${timePad(Math.floor(num / 60 / 60))}:${timePad(Math.floor(num / 60 % 60))}:${timePad(Math.floor(num % 60))}`
const formatDateTime = (date: Date) =>
  `${timePad(date.getHours())}:${timePad(date.getMinutes())}:${timePad(date.getSeconds())}`
setInterval(() => {
  const datetime = new Date()
  nowTime.value = formatDateTime(datetime)
  const oddOrEven = getOddOrEven(datetime.getUTCMilliseconds(), startUTC)
  const tempSchedules = schedules.filter(
    (schedule) =>
      csesWeekdayToDate(schedule.enable_day) == datetime.getDay() &&
      ['all', oddOrEven].some((it) => it == schedule.weeks),
  )
  const tempTime = datetime.getHours() * 60 * 60 + datetime.getMinutes() * 60 + datetime.getSeconds()
  nowClasses.value = getNow(oddOrEven, tempSchedules)
    .map((value, index) => ({ value: value, index }))
    .filter(({ value }) => value.endTime > tempTime)
  nowTimeNumber.value = formatTime(nowClasses.value[0].value.endTime - tempTime)
}, 1000)
const weekdayMap = ['error', '周一', '周二', '周三', '周四', '周五', '周六', '周日']
</script>

<template>
  <div class="fixed right-4 bottom-4 flex items-end justify-end text-stone-500 font-mono flex-col">
    <div class="text-5xl">ETA: {{ nowTimeNumber }}</div>
    <div class="text-9xl">{{ nowTime }}</div>
  </div>
  <main class="px-8 min-h-dvh bg-stone-200 py-4">
    <!-- <div class="text-7xl font-extralight">
      {{ datetime }}
    </div> -->
    <div class="w-fit flex flex-col gap-4">
      <div v-for="{ value, index }, rowIndex in nowClasses" :key="index"
        class="grid grid-cols-2 grid-rows-2 w-fit gap-1">
        <div class="col-start-1 row-start-1 row-end-3 text-6xl aria-expanded:text-9xl" :aria-expanded="rowIndex == 0">{{
          value.subject }}</div>
        <div class="col-start-2 row-start-1 w-fit self-end text-xl aria-expanded:text-5xl"
          :aria-expanded="rowIndex == 0">{{ value.room }}</div>
        <div class="col-start-2 row-start-2 w-fit self-end text-xl aria-expanded:text-5xl"
          :aria-expanded="rowIndex == 0">{{ value.teacher }}</div>
      </div>
    </div>

  </main>

</template>

<style scoped></style>
