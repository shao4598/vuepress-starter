# 级联选择 Cascader

## 允许清除

<a-card>
  <a-cascader
    allow-clear
    :options="options"
    v-model="value"
    style="width:320px"
    placeholder="请选择"
  />
</a-card>

```vue{3}
<template>
  <a-cascader
    allow-clear
    :options="options"
    v-model="value"
    style="width:320px"
    placeholder="请选择"
  />
</template>
```

## 允许搜索

:man_judge: 默认**关闭**，由产品经理明示是否启用。

<a-card>
  <a-cascader
    allow-search
    allow-clear
    :options="options"
    v-model="value"
    :style="{width:'320px'}"
    placeholder="请选择"
  />
</a-card>

```vue{3}
<template>
  <a-cascader
    allow-search
    allow-clear
    :options="options"
    v-model="value"
    style="width:320px"
    placeholder="请选择"
  />
</template>
```

## 严格选择模式

:man_judge: 默认**关闭**，由产品经理明示是否启用。

<a-card>
  <a-cascader
    check-strictly
    allow-clear
    :options="options"
    v-model="value"
    style="width:320px"
    placeholder="请选择"
  />
</a-card>

```vue{3}
<template>
  <a-cascader
    check-strictly
    allow-clear
    :options="options"
    v-model="value"
    :style="{width:'320px'}"
    placeholder="请选择"
  />
</template>
```

## vs TreeSelect

TreeSelect 与 Cascader 功能类似，默认 Cascader 优先级更高。

如果有存储选择路径需求、搜索需求，一定使用 Cascader。

<a-card>
  <a-space direction="vertical">
    <span>Cascader</span>
    <a-cascader
      allow-clear
      :options="options"
      v-model="value"
      :style="{width:'320px'}"
      placeholder="请选择"
    />
    <span>TreeSelect</span>
    <a-tree-select
      v-model="value"
      :data="treeData"
      placeholder="请选择"
      style="width: 320px"
    />
  </a-space>
</a-card>



<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('datunli');

const options = [
  {
    value: 'beijing',
    label: '北京',
    children: [
      {
        value: 'chaoyang',
        label: '朝阳',
        children: [
          {
            value: 'datunli',
            label: '大屯里',
          },
        ],
      },
      {
        value: 'haidian',
        label: '海淀',
      },
      {
        value: 'dongcheng',
        label: '东城',
      },
      {
        value: 'xicheng',
        label: '西城',
        children: [
          {
            value: 'jinrongjie',
            label: '金融街',
          },
          {
            value: 'tianqiao',
            label: '天桥',
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: '上海',
    children: [
      {
        value: 'huangpu',
        label: '黄埔',
      },
    ],
  },
];

const treeData = [
    {
      key: 'beijing',
      title: '北京',
      children: [
        {
          key: 'chaoyang',
          title: '朝阳',
          children: [
            {
              key: 'datunli',
              title: '大屯里',
            },
          ],
        },
        {
          key: 'haidian',
          title: '海淀',
        },
        {
          key: 'dongcheng',
          title: '东城',
        },
        {
          key: 'xicheng',
          title: '西城',
          children: [
            {
              key: 'jinrongjie',
              title: '金融街',
            },
            {
              key: 'tianqiao',
              title: '天桥',
            },
          ],
        },
      ],
    },
    {
      key: 'shanghai',
      title: '上海',
      children: [
        {
          key: 'huangpu',
          title: '黄埔',
        },
      ],
    },
  ];
</script>
