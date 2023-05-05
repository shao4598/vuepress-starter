# 表单 Form

Label 与组件上下布局。

校验效果要体现在表单上，不要使用消息弹窗等方式。

不使用回车提交表单。

<a-card>
  <a-form
    ref="formRef"
    layout="vertical"
    :model="formState"
    :rules="rules"
  >
    <a-form-item
      field="name"
      label="用户名"
    >
      <a-input v-model="formState.name" placeholder="请输入用户名" />
    </a-form-item>
    <a-form-item
      field="age"
      label="年龄"
    >
      <a-input-number v-model="formState.age" placeholder="请输入年龄" />
    </a-form-item>
    <a-form-item>
      <a-space>
        <a-button type="primary" @click="onSubmit">提交</a-button>
        <a-button @click="$refs.formRef.resetFields()">重置</a-button>
      </a-space>
    </a-form-item>
  </a-form>
</a-card>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { FormInstance } from '@arco-design/web-vue';

const rules = {
  name: [
    {
      required: true,
      message: '请输入用户名'
    },
    {
      minLength: 5,
      message: '用户名至少5个字'
    }
  ],
  age: [
    {
      required: true,
      message: '请输入年龄'
    },
    {
      type:'number',
      max: 200,
      message: '年龄最大200岁'
    }
  ]
}

const formState = reactive({
  name: '',
  age: undefined,
});

const formRef = ref<FormInstance>();
async function onSubmit(){
  await formRef.value.validate()
}
</script>

```vue{4}
<template>
  <a-form
    ref="formRef"
    layout="vertical"
    :model="formState"
    :rules="rules"
  >
    <a-form-item
      field="name"
      label="用户名"
    >
      <a-input v-model="formState.name" placeholder="请输入用户名" />
    </a-form-item>
    <a-form-item
      field="age"
      label="年龄"
    >
      <a-input-number v-model="formState.age" placeholder="请输入年龄" />
    </a-form-item>
    <a-form-item>
      <a-space>
        <a-button type="primary" @click="onSubmit">提交</a-button>
        <a-button @click="$refs.formRef.resetFields()">重置</a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>


<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { FormInstance } from '@arco-design/web-vue';

const rules = {
  name: [
    {
      required: true,
      message: '请输入用户名'
    },
    {
      minLength: 5,
      message: '用户名至少5个字'
    }
  ],
  age: [
    {
      required: true,
      message: '请输入年龄'
    },
    {
      type:'number',
      max: 200,
      message: '年龄最大200岁'
    }
  ]
}

const formState = reactive({
  name: '',
  age: undefined,
});

const formRef = ref<FormInstance>();
async function onSubmit(){
  await formRef.value.validate()
}
</script>
```


