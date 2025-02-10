// import Cses from '../cses.json'
// import Config from '../config.json'

const rawCses = {
  $schema: 'https://raw.bgithub.xyz/CSES-org/CSES/refs/heads/main/cses.schema.json',
  version: 1,
  subjects: [
    {
      name: '数学',
      teacher: '张三',
      room: '312',
      simplified_name: '数',
    },
    {
      name: '语文',
      teacher: '李四',
      room: '312',
      simplified_name: '语',
    },
    {
      name: '英语',
      teacher: '王五',
      room: '312',
      simplified_name: '英',
    },
    {
      name: '早自习',
      teacher: '班主任',
      room: '教室',
      simplified_name: '早',
    },
    {
      name: '班会',
      teacher: '班主任',
      room: '教室',
      simplified_name: '班',
    },
    {
      name: '大课间',
      room: '操场 / 教室',
      teacher: '班主任',
      simplified_name: '大',
    },
    {
      name: '晚自习',
      simplified_name: '晚',
      teacher: '班主任',
      room: '教室',
    },
    {
      name: '活动',
      simplified_name: '活',
      room: '教室',
    },
  ],
  schedules: [
    {
      name: 'all-mon',
      weeks: 'all',
      enable_day: 1,
      classes: [
        {
          subject: '早自习',
          start_time: '07:40:00',
          end_time: '08:00:00',
        },
        {
          subject: '语文',
          start_time: '08:10:00',
          end_time: '08:50:00',
        },
        {
          subject: '语文',
          start_time: '09:00:00',
          end_time: '09:40:00',
        },
        {
          subject: '大课间',
          start_time: '09:40:00',
          end_time: '10:10:00',
        },
        {
          subject: '数学',
          start_time: '10:10:00',
          end_time: '10:50:00',
        },
        {
          subject: '数学',
          start_time: '11:00:00',
          end_time: '11:40:00',
        },
        {
          subject: '英语',
          start_time: '13:30:00',
          end_time: '14:10:00',
        },
        {
          subject: '英语',
          start_time: '14:20:00',
          end_time: '15:00:00',
        },
        {
          subject: '语文',
          start_time: '15:10:00',
          end_time: '15:40:00',
        },
        {
          subject: '语文',
          start_time: '15:50:00',
          end_time: '16:30:00',
        },
        {
          subject: '晚自习',
          start_time: '18:00:00',
          end_time: '18:50:00',
        },
        {
          subject: '晚自习',
          start_time: '18:00:00',
          end_time: '20:00:00',
        },
      ],
    },
    // {
    //   "name": "all-tue",
    //   "weeks": "all",
    //   "enable_day": 2,
    //   "classes": [
    //     {
    //       "subject": "早自习",
    //       "start_time": "07:40:00",
    //       "end_time": "08:00:00"
    //     },
    //     {
    //       "subject": "语文",
    //       "start_time": "08:10:00",
    //       "end_time": "08:50:00"
    //     },
    //     {
    //       "subject": "语文",
    //       "start_time": "09:00:00",
    //       "end_time": "09:40:00"
    //     },
    //     {
    //       "subject": "大课间",
    //       "start_time": "09:40:00",
    //       "end_time": "10:10:00"
    //     },
    //     {
    //       "subject": "数学",
    //       "start_time": "10:10:00",
    //       "end_time": "10:50:00"
    //     },
    //     {
    //       "subject": "数学",
    //       "start_time": "11:00:00",
    //       "end_time": "11:40:00"
    //     },
    //     {
    //       "subject": "英语",
    //       "start_time": "13:30:00",
    //       "end_time": "14:10:00"
    //     },
    //     {
    //       "subject": "英语",
    //       "start_time": "14:20:00",
    //       "end_time": "15:00:00"
    //     },
    //     {
    //       "subject": "活动",
    //       "start_time": "15:10:00",
    //       "end_time": "15:40:00"
    //     },
    //     {
    //       "subject": "活动",
    //       "start_time": "15:50:00",
    //       "end_time": "16:30:00"
    //     },
    //     {
    //       "subject": "晚自习",
    //       "start_time": "18:00:00",
    //       "end_time": "18:50:00"
    //     },
    //     {
    //       "subject": "晚自习",
    //       "start_time": "18:00:00",
    //       "end_time": "20:00:00"
    //     }
    //   ]
    // },
    // {
    //   "name": "all-3",
    //   "weeks": "all",
    //   "enable_day": 3,
    //   "classes": [
    //     {
    //       "subject": "早自习",
    //       "start_time": "07:40:00",
    //       "end_time": "08:00:00"
    //     },
    //     {
    //       "subject": "语文",
    //       "start_time": "08:10:00",
    //       "end_time": "08:50:00"
    //     },
    //     {
    //       "subject": "语文",
    //       "start_time": "09:00:00",
    //       "end_time": "09:40:00"
    //     },
    //     {
    //       "subject": "大课间",
    //       "start_time": "09:40:00",
    //       "end_time": "10:10:00"
    //     },
    //     {
    //       "subject": "数学",
    //       "start_time": "10:10:00",
    //       "end_time": "10:50:00"
    //     },
    //     {
    //       "subject": "数学",
    //       "start_time": "11:00:00",
    //       "end_time": "11:40:00"
    //     },
    //     {
    //       "subject": "英语",
    //       "start_time": "13:30:00",
    //       "end_time": "14:10:00"
    //     },
    //     {
    //       "subject": "英语",
    //       "start_time": "14:20:00",
    //       "end_time": "15:00:00"
    //     },
    //     {
    //       "subject": "语文",
    //       "start_time": "15:10:00",
    //       "end_time": "15:40:00"
    //     },
    //     {
    //       "subject": "语文",
    //       "start_time": "15:50:00",
    //       "end_time": "16:30:00"
    //     },
    //     {
    //       "subject": "晚自习",
    //       "start_time": "18:00:00",
    //       "end_time": "18:50:00"
    //     },
    //     {
    //       "subject": "晚自习",
    //       "start_time": "18:00:00",
    //       "end_time": "20:00:00"
    //     }
    //   ]
    // },
    // {
    //   "name": "all-4",
    //   "weeks": "all",
    //   "enable_day": 4,
    //   "classes": [
    //     {
    //       "subject": "早自习",
    //       "start_time": "07:40:00",
    //       "end_time": "08:00:00"
    //     },
    //     {
    //       "subject": "语文",
    //       "start_time": "08:10:00",
    //       "end_time": "08:50:00"
    //     },
    //     {
    //       "subject": "语文",
    //       "start_time": "09:00:00",
    //       "end_time": "09:40:00"
    //     },
    //     {
    //       "subject": "大课间",
    //       "start_time": "09:40:00",
    //       "end_time": "10:10:00"
    //     },
    //     {
    //       "subject": "数学",
    //       "start_time": "10:10:00",
    //       "end_time": "10:50:00"
    //     },
    //     {
    //       "subject": "数学",
    //       "start_time": "11:00:00",
    //       "end_time": "11:40:00"
    //     },
    //     {
    //       "subject": "英语",
    //       "start_time": "13:30:00",
    //       "end_time": "14:10:00"
    //     },
    //     {
    //       "subject": "英语",
    //       "start_time": "14:20:00",
    //       "end_time": "15:00:00"
    //     },
    //     {
    //       "subject": "活动",
    //       "start_time": "15:10:00",
    //       "end_time": "15:40:00"
    //     },
    //     {
    //       "subject": "活动",
    //       "start_time": "15:50:00",
    //       "end_time": "16:30:00"
    //     },
    //     {
    //       "subject": "晚自习",
    //       "start_time": "18:00:00",
    //       "end_time": "18:50:00"
    //     },
    //     {
    //       "subject": "晚自习",
    //       "start_time": "18:00:00",
    //       "end_time": "20:00:00"
    //     }
    //   ]
    // },
    // {
    //   "name": "all-5",
    //   "weeks": "all",
    //   "enable_day": 5,
    //   "classes": [
    //     {
    //       "subject": "早自习",
    //       "start_time": "07:40:00",
    //       "end_time": "08:00:00"
    //     },
    //     {
    //       "subject": "语文",
    //       "start_time": "08:10:00",
    //       "end_time": "08:50:00"
    //     },
    //     {
    //       "subject": "语文",
    //       "start_time": "09:00:00",
    //       "end_time": "09:40:00"
    //     },
    //     {
    //       "subject": "大课间",
    //       "start_time": "09:40:00",
    //       "end_time": "10:10:00"
    //     },
    //     {
    //       "subject": "数学",
    //       "start_time": "10:10:00",
    //       "end_time": "10:50:00"
    //     },
    //     {
    //       "subject": "数学",
    //       "start_time": "11:00:00",
    //       "end_time": "11:40:00"
    //     },
    //     {
    //       "subject": "英语",
    //       "start_time": "13:30:00",
    //       "end_time": "14:10:00"
    //     },
    //     {
    //       "subject": "英语",
    //       "start_time": "14:20:00",
    //       "end_time": "15:00:00"
    //     }
    //   ]
    // }
  ],
}

const timeFromString = (s) =>
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
  classes: it.classes
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
    .reduce((acc, now, index) => {
      if (now.endTime < now.startTime) {
        now.endTime = now.startTime
      }
      if (acc.length == 0) {
        return now.startTime == 0
          ? [now]
          : acc.concat([{ ...defaultClass, endTime: now.startTime }, now])
      }
      const back = acc[acc.length - 1]
      if (back.startTime == back.endTime || back.endTime > now.startTime) {
        // 修改 back 指向 arr 中的值
        back.endTime = now.startTime
        return acc.concat(now)
      }
      if (index == it.classes.length - 1 && now.endTime < 24 * 60 * 60 - 1) {
        return acc.concat([now, { ...defaultClass, startTime: now.endTime, endTime: 24 * 60 * 60 }])
      }
      console.log(index, now.endTime)
      return acc.concat([
        { ...defaultClass, subject: '下课', startTime: back.endTime, endTime: now.startTime },
        now,
      ])
    }, []),
}))
const tmp = schedules[0].classes
console.log(tmp[tmp.length - 1].endTime)
