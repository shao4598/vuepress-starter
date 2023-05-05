# 全局提示 Message

接口调用成功/失败时，要有全局Success/Error提示。详见[对话框 Modal](./modal.md)  文档。

消息显示的持续时间```3```秒，可在配置文件配置。

<a-card>
  <a-button type="primary" @click="onClick">点我打开全局提示</a-button>
</a-card>


<script lang="ts" setup>
import { Message } from '@arco-design/web-vue';

// 持续时间从配置文件读取
const duration = 1000 * 3
function onClick(){
  Message.success({
    duration,
    content: '提交成功'
  })
}
</script>

```vue{8-9}
<template>
  <a-button type="primary" @click="onClick">点我打开全局提示</a-button>
</template>

<script lang="ts" setup>
import { Message } from '@arco-design/web-vue';

// 持续时间从配置文件读取
const duration = 1000 * 3
function onClick(){
  Message.success({
    duration,
    content: '提交成功'
  })
}
</script>
```
