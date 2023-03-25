# 表单 Form

## 布局

Label 与组件上下布局。

<a-card>
  <a-space direction="vertical" size="large" :style="{width: '600px'}">
    <a-form :model="formState" layout="vertical">
      <a-form-item field="name" label="用户名">
        <a-input v-model="formState.name" placeholder="请输入内容" />
      </a-form-item>
      <a-form-item field="post" label="邮箱">
        <a-input v-model="formState.post" placeholder="请输入内容" />
      </a-form-item>
      <a-form-item field="isRead">
        <a-checkbox v-model="formState.isRead">
          我已阅读用户协议
        </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button type="primary">提交</a-button>
      </a-form-item>
    </a-form>
    <div>
      {{ formState }}
    </div>
  </a-space>
</a-card>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const formState = reactive({
  name: '',
  post: '',
  isRead: false,
})
</script>

```vue{4}
<template>
  <a-form
    :model="formState"
    layout="vertical"
  >
    <a-form-item field="name" label="用户名">
      <a-input v-model="formState.name" placeholder="请输入内容" />
    </a-form-item>
    <a-form-item field="post" label="邮箱">
      <a-input v-model="formState.post" placeholder="请输入内容" />
    </a-form-item>
    <a-form-item field="isRead">
      <a-checkbox v-model="formState.isRead">
        我已阅读用户协议
      </a-checkbox>
    </a-form-item>
    <a-form-item>
      <a-button type="primary">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const formState = reactive({
  name: '',
  post: '',
  isRead: false,
})
</script>
```

## 校验

校验效果要体现在表单上，不要使用消息弹窗等方式。


## 提交

不使用回车提交表单。
