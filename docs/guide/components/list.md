# 列表 List

## 虚拟滚动

列表一次全量获取数据，开启虚拟滚动

<a-card>
  <a-list
    :virtualListProps="{
      height: 560,
    }"
    :data="list"
  >
    <template #item="{ item, index }">
      <a-list-item :key="index">
        <a-list-item-meta
          :title="item.title"
          :description="item.address"
        >
          <template #avatar>
            <a-tag color="#ff5722">
              {{ item.level }}
            </a-tag>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</a-card>

<script lang="ts" setup>
import { reactive } from 'vue';

const list = reactive(Array(10000).fill(null).map((_, index) => {
  const subfix = `0000${index}`.slice(-5);
  return {
    level: '一级警情',
    title: `流产事故\\犯罪\\人工流产(${subfix}) `,
    address: '市政府广场'
  };
}))
</script>

```vue{3-5}
<template>
  <a-list
    :virtualListProps="{
      height: 560,
    }"
    :data="list"
  >
    <template #item="{ item, index }">
      <a-list-item :key="index">
        <a-list-item-meta
          :title="item.title"
          :description="item.address"
        >
          <template #avatar>
            <a-tag color="#ff5722">
              {{ item.level }}
            </a-tag>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
```
