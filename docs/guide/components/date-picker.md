# 日期选择器 DatePicker / 时间选择器 TimePicker

## 范围选择器

日期范围场景应使用范围选择器，不要使用两个单独的选择器。从而自动规避“结束时间小于开始时间”问题。

:x:

<a-card>
  <a-space direction="vertical">
    <span>开始时间</span>
    <a-date-picker
      style="width: 200px"
    />
    <span>结束时间</span>
    <a-date-picker
      style="width: 200px"
    />
  </a-space>
</a-card>

:white_check_mark:

<a-card>
  <a-space direction="vertical">
    <span>时间范围</span>
    <a-range-picker
      style="width: 254px"
    />
  </a-space>
</a-card>

## 颗粒度

如果颗粒度到“天”，查询范围取 YYYY-MM-DD 00:00:00 <= datetime < YYYY-MM-**(DD+1)** 00:00:00，存储范围不改动。

<a-card>
  <a-space direction="vertical">
      <a-range-picker
        v-model="datetimeByDay"
        :shortcuts="rangeShortcutsForDay"
        shortcuts-position="right"
        style="width: 254px"
        value-format="YYYY-MM-DD HH:mm:ss"
      />
      <span>{{ submitDatetimeByDay }}</span>
      <span>{{ saveDatetimeByDay }}</span>
  </a-space>
</a-card>

```vue{6,25-27}
<template>
  <a-space direction="vertical">
      <a-range-picker
        v-model="datetimeByDay"
        :shortcuts="rangeShortcuts"
        shortcuts-position="right"
        style="width: 254px"
        value-format="YYYY-MM-DD HH:mm:ss"
      />
      <span>{{ submitDatetimeByDay }}</span>
      <span>{{ saveDatetimeByDay }}</span>
  </a-space>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'

const datetimeByDay = ref<[string, string]>([])

// 查询范围
const submitDatetimeByDay = computed<string>(()=>{
  if(!datetimeByDay.value?.length){
    return ''
  }
  const [starttime, endtime] = datetimeByDay.value
  const endtimeNextDay = dayjs(endtime)
                          .add(1, 'day')
                          .format('YYYY-MM-DD HH:mm:ss')
  return `查询范围: ${starttime} <= datetime < ${endtimeNextDay}`
})

// 存储范围
const saveDatetimeByDay = computed<string>(()=>{
  if(!datetimeByDay.value?.length){
    return ''
  }
  const [starttime, endtime] = datetimeByDay.value
  return `存储范围: ${starttime} ~ ${endtime}`
})

const rangeShortcuts = [
  {
    label: '过去2天',
    value: () => [dayjs().hour(0).minute(0).second(0).subtract(2, 'day'), dayjs().hour(0).minute(0).second(0)],
  },
  {
    label: '过去7天',
    value: () => [dayjs().hour(0).minute(0).second(0).subtract(7, 'day'), dayjs().hour(0).minute(0).second(0)],
  },
  {
    label: '过去1个月',
    value: () => [dayjs().hour(0).minute(0).second(0).subtract(1, 'month'), dayjs().hour(0).minute(0).second(0)],
  },
  {
    label: '过去6个月',
    value: () => [dayjs().hour(0).minute(0).second(0), dayjs().hour(0).minute(0).second(0).add(6, 'month')],
  },
  {
    label: '未来2天',
    value: () => [dayjs().hour(0).minute(0).second(0), dayjs().hour(0).minute(0).second(0).add(2, 'day')],
  },
  {
    label: '未来7天',
    value: () => [dayjs().hour(0).minute(0).second(0), dayjs().hour(0).minute(0).second(0).add(7, 'day')],
  },
  {
    label: '未来1个月',
    value: () => [dayjs().hour(0).minute(0).second(0), dayjs().hour(0).minute(0).second(0).add(1, 'month')],
  },
  {
    label: '未来6个月',
    value: () => [dayjs().hour(0).minute(0).second(0), dayjs().hour(0).minute(0).second(0).add(6, 'month')],
  }
]
</script>
```

如果颗粒度到“秒”，允许操作到“分”。

如果颗粒度到“秒”，查询范围取 YYYY-MM-DD HH:mm:00 <= datetime < YYYY-MM-DD HH:mm:00，存储范围不改动。

如果颗粒度到“秒”，时间默认00:00:00，加一个“此刻”快捷按钮。

<a-card>
  <a-space direction="vertical">
    <a-range-picker
      showTime
      v-model="datetimeBySecond"
      :time-picker-props="{
        format: 'HH:mm',
        defaultValue: '00:00:00'
      }"
      :shortcuts="rangeShortcutsForSecond"
      shortcuts-position="right"
      style="width: 380px"
    />
    <span>{{ submitDatetimeBySecond }}</span>
    <span>{{ saveDatetimeBySecond }}</span>
  </a-space>
</a-card>

```vue{5-11}
<template>
  <a-space direction="vertical">
    <a-range-picker
      v-model="datetimeBySecond"
      showTime
      :time-picker-props="{
        format: 'HH:mm',
        defaultValue: '00:00:00'
      }"
      :shortcuts="rangeShortcuts"
      shortcuts-position="right"
      style="width: 380px"
    />
    <span>{{ submitDatetimeBySecond }}</span>
    <span>{{ saveDatetimeBySecond }}</span>
  </a-space>
<template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'

const datetimeBySecond = ref<[string, string]>([])

const submitDatetimeBySecond = computed<string>(()=>{
  if(!datetimeBySecond.value?.length){
    return ''
  }
  const [starttime, endtime] = datetimeBySecond.value
  return `查询范围: ${starttime} <= datetime < ${endtime}`
})

const saveDatetimeBySecond = computed<string>(()=>{
  if(!datetimeBySecond.value?.length){
    return ''
  }
  const [starttime, endtime] = datetimeBySecond.value
  return `存储范围: ${starttime} ~ ${endtime}`
})

const rangeShortcuts = [
  {
    label: '过去2天',
    value: () => [dayjs().hour(0).minute(0).second(0).subtract(2, 'day'), dayjs()],
  },
  {
    label: '过去7天',
    value: () => [dayjs().hour(0).minute(0).second(0).subtract(7, 'day'), dayjs()],
  },
  {
    label: '过去1个月',
    value: () => [dayjs().hour(0).minute(0).second(0).subtract(1, 'month'), dayjs()],
  },
  {
    label: '过去6个月',
    value: () => [dayjs().hour(0).minute(0).second(0).subtract(6, 'month'), dayjs()],
  },
  {
    label: '未来2天',
    value: () => [dayjs(), dayjs().hour(0).minute(0).second(0).add(2, 'day')],
  },
  {
    label: '未来7天',
    value: () => [dayjs(), dayjs().hour(0).minute(0).second(0).add(7, 'day')],
  },
  {
    label: '未来1个月',
    value: () => [dayjs(), dayjs().hour(0).minute(0).second(0).add(1, 'month')],
  },
  {
    label: '未来6个月',
    value: () => [dayjs(), dayjs().hour(0).minute(0).second(0).add(6, 'month')],
  }
]
</script>
```

注意某些业务场景下，存在不可选取的日期时间。

<script lang="ts" setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'

//颗粒度天
const datetimeByDay = ref<[string, string]>([])

const submitDatetimeByDay = computed<string>(()=>{
  if(!datetimeByDay.value?.length){
    return ''
  }
  const [starttime, endtime] = datetimeByDay.value
  const endtimeNextDay = dayjs(endtime).add(1, 'day').format('YYYY-MM-DD HH:mm:ss')
  return `查询范围: ${starttime} <= datetime < ${endtimeNextDay}`
})

const saveDatetimeByDay = computed<string>(()=>{
  if(!datetimeByDay.value?.length){
    return ''
  }
  const [starttime, endtime] = datetimeByDay.value
  return `存储范围: ${starttime} ~ ${endtime}`
})

//颗粒度秒
const datetimeBySecond = ref<[string, string]>([])

const submitDatetimeBySecond = computed<string>(()=>{
  if(!datetimeBySecond.value?.length){
    return ''
  }
  const [starttime, endtime] = datetimeBySecond.value
  return `查询范围: ${starttime} <= datetime < ${endtime}`
})

const saveDatetimeBySecond = computed<string>(()=>{
  if(!datetimeBySecond.value?.length){
    return ''
  }
  const [starttime, endtime] = datetimeBySecond.value
  return `存储范围: ${starttime} ~ ${endtime}`
})

const rangeShortcutsForDay = [
  {
    label: '过去2天',
    value: () => [dayjs().hour(0).minute(0).second(0).subtract(2, 'day'), dayjs().hour(0).minute(0).second(0)],
  },
  {
    label: '过去7天',
    value: () => [dayjs().hour(0).minute(0).second(0).subtract(7, 'day'), dayjs().hour(0).minute(0).second(0)],
  },
  {
    label: '过去1个月',
    value: () => [dayjs().hour(0).minute(0).second(0).subtract(1, 'month'), dayjs().hour(0).minute(0).second(0)],
  },
  {
    label: '过去6个月',
    value: () => [dayjs().hour(0).minute(0).second(0), dayjs().hour(0).minute(0).second(0).add(6, 'month')],
  },
  {
    label: '未来2天',
    value: () => [dayjs().hour(0).minute(0).second(0), dayjs().hour(0).minute(0).second(0).add(2, 'day')],
  },
  {
    label: '未来7天',
    value: () => [dayjs().hour(0).minute(0).second(0), dayjs().hour(0).minute(0).second(0).add(7, 'day')],
  },
  {
    label: '未来1个月',
    value: () => [dayjs().hour(0).minute(0).second(0), dayjs().hour(0).minute(0).second(0).add(1, 'month')],
  },
  {
    label: '未来6个月',
    value: () => [dayjs().hour(0).minute(0).second(0), dayjs().hour(0).minute(0).second(0).add(6, 'month')],
  }
]

const rangeShortcutsForSecond = [
  {
    label: '过去2天',
    value: () => [dayjs().hour(0).minute(0).second(0).subtract(2, 'day'), dayjs()],
  },
  {
    label: '过去7天',
    value: () => [dayjs().hour(0).minute(0).second(0).subtract(7, 'day'), dayjs()],
  },
  {
    label: '过去1个月',
    value: () => [dayjs().hour(0).minute(0).second(0).subtract(1, 'month'), dayjs()],
  },
  {
    label: '过去6个月',
    value: () => [dayjs(), dayjs().hour(0).minute(0).second(0).add(6, 'month')],
  },
  {
    label: '未来2天',
    value: () => [dayjs(), dayjs().hour(0).minute(0).second(0).add(2, 'day')],
  },
  {
    label: '未来7天',
    value: () => [dayjs(), dayjs().hour(0).minute(0).second(0).add(7, 'day')],
  },
  {
    label: '未来1个月',
    value: () => [dayjs(), dayjs().hour(0).minute(0).second(0).add(1, 'month')],
  },
  {
    label: '未来6个月',
    value: () => [dayjs(), dayjs().hour(0).minute(0).second(0).add(6, 'month')],
  }
]
</script>
