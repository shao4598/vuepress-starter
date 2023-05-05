# 抽屉 Drawer

点击遮罩层不可以关闭抽屉

<a-card>
  <a-button type="primary" @click="onClick">点我打开抽屉</a-button>
</a-card>
<a-drawer
  :mask-closable="false"
  title="时间轴"
  v-model:visible="visible"
>
  <a-timeline>
    <a-timeline-item label="2023-03-10 15:00:00">处置完成</a-timeline-item>
    <a-timeline-item label="2023-03-10 11:30:00">到达现场</a-timeline-item>
    <a-timeline-item label="2023-03-10 11:00:00">接到警单</a-timeline-item>
  </a-timeline>
</a-drawer>

<script lang="ts" setup>
import { ref } from 'vue';
const visible = ref(false);

function onClick(){
  visible.value = true;
};
</script>

```vue{4}
<template>
  <a-button type="primary" @click="onClick">点我打开抽屉</a-button>
  <a-drawer
    :mask-closable="false"
    title="时间轴"
    v-model:visible="visible"
  >
    <a-timeline>
      <a-timeline-item label="2023-03-10 15:00:00">处置完成</a-timeline-item>
      <a-timeline-item label="2023-03-10 11:30:00">到达现场</a-timeline-item>
      <a-timeline-item label="2023-03-10 11:00:00">接到警单</a-timeline-item>
    </a-timeline>
  </a-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const visible = ref(false);

function onClick(){
  visible.value = true;
};
</script>
```
