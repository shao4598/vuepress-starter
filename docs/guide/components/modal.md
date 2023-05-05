# 对话框 Modal

点击遮罩层不可以关闭对话框。

取消按钮在左侧，确认按钮在右侧。

确定/取消按钮在对话框右下角？

点击确定，提交表单时，OK按钮变loading状态，“叉”不可关闭，“取消”按钮、表单disable。

请求成功自动关闭对话框。请求失败保留对话框。

<a-card>
  <a-button type="primary" @click="onClick">点我打开对话框</a-button>
</a-card>
<a-modal
  title="拒绝接收"
  v-model:visible="visible"
  :on-before-ok="onBeforeOk"
  :mask-closable="false"
  :cancel-button-props="{disabled:isSubmitting}"
  :closable="!isSubmitting"
  @close="onClose"
>
  <a-form
    ref="formRef"
    layout="vertical"
    :disabled="isSubmitting"
    :model="formState"
    :rules="rules"
  >
    <a-form-item
      field="reject"
      label="拒绝原因"
    >
      <a-textarea
        show-word-limit
        v-model="formState.reject"
        :max-length="500"
        placeholder="请输入拒绝原因"
      />
    </a-form-item>
  </a-form>
</a-modal>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Message } from '@arco-design/web-vue';
import type { FormInstance } from '@arco-design/web-vue';

const visible = ref(false);
const isSubmitting = ref(false)

const formState = reactive({
  reject: '',
});

const rules = {
  reject: [
    {
      required: true,
      message: '请输入拒绝原因'
    },
  ],
}

const formRef = ref<FormInstance>();
async function onBeforeOk(){
  if(await formRef.value.validate()){
    return false
  }
  isSubmitting.value = true
  try {
    await mockCallApi()
    isSubmitting.value = false
    return true;
  }catch(error){
    isSubmitting.value = false
    return false
  }
};

let isSubmitSuccess = true
function mockCallApi(){
  isSubmitSuccess = !isSubmitSuccess
  return new Promise((resolve, reject) => setTimeout(()=>{
    if(isSubmitSuccess){
      Message.success('提交成功')
      resolve()
    }else{
      Message.error('提交失败')
      reject()
    }
  }, 1000 * 2));
}

function onClose(){
  formState.reject = ''
}

function onClick(){
  visible.value = true;
};
</script>


```vue{7-9,41,61,64,67}
<template>
  <a-button type="primary" @click="onClick">点我打开对话框</a-button>
  <a-modal
    title="拒绝接收"
    v-model:visible="visible"
    :on-before-ok="onBeforeOk"
    :mask-closable="false"
    :cancel-button-props="{disabled:isSubmitting}"
    :closable="!isSubmitting"
    @close="onClose"
  >
    <a-form
      ref="formRef"
      layout="vertical"
      :disabled="isSubmitting"
      :model="formState"
      :rules="rules"
    >
      <a-form-item
        field="reject"
        label="拒绝原因"
      >
        <a-textarea
          show-word-limit
          v-model="formState.reject"
          :max-length="500"
          placeholder="请输入拒绝原因"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>


<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Message } from '@arco-design/web-vue';
import type { FormInstance } from '@arco-design/web-vue';

const visible = ref(false);
const isSubmitting = ref(false)

const formState = reactive({
  reject: '',
});

const rules = {
  reject: [
    {
      required: true,
      message: '请输入拒绝原因'
    },
  ],
}

const formRef = ref<FormInstance>();
async function onBeforeOk(){
  if(await formRef.value.validate()){
    return false
  }
  isSubmitting.value = true
  try {
    await mockCallApi()
    isSubmitting.value = false
    return true;
  }catch(error){
    isSubmitting.value = false
    return false
  }
};

let isSubmitSuccess = true
function mockCallApi(){
  isSubmitSuccess = !isSubmitSuccess
  return new Promise((resolve, reject) => setTimeout(()=>{
    if(isSubmitSuccess){
      Message.success('提交成功')
      resolve()
    }else{
      Message.error('提交失败')
      reject()
    }
  }, 1000 * 2));
}

function onClose(){
  formState.reject = ''
}

function onClick(){
  visible.value = true;
};
</script>
```
