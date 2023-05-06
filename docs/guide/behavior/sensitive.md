# 敏感信息 Sensitive

统一使用```*```隐藏关键信息。

修改密码功能的页面要独立出来。不要出现全是```*****```回显密码情况。

:x:

<a-input-password v-model="password" />

:white_check_mark:

<a-button type="primary" @click="onClick">修改密码</a-button>
<a-modal
  title="修改密码"
  v-model:visible="visible"
  :on-before-ok="onBeforeOk"
  :mask-closable="false"
  :cancel-button-props="{disabled:isSubmitting}"
  :closable="!isSubmitting"
  @close="onClose"
>
  <a-form
    layout="vertical"
    :disabled="isSubmitting"
    :model="formState"
  >
    <a-form-item
      field="oldPassword"
      label="原密码"
    >
      <a-input-password
        show-word-limit
        v-model="formState.oldPassword"
        :max-length="50"
        placeholder="请输入密码"
      />
    </a-form-item>
    <a-form-item
      field="newPassword"
      label="新密码"
    >
      <a-input-password
        show-word-limit
        v-model="formState.newPassword"
        :max-length="50"
        placeholder="请输入密码"
      />
    </a-form-item>
    <a-form-item
      field="confirmNewPassword"
      label="确认新密码"
    >
      <a-input-password
        show-word-limit
        v-model="formState.confirmNewPassword"
        :max-length="50"
        placeholder="请输入密码"
      />
    </a-form-item>
  </a-form>
</a-modal>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Message } from '@arco-design/web-vue';
import type { FormInstance } from '@arco-design/web-vue';

const password = ref("123456789")

const visible = ref(false);

const formState = reactive({
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: ''
});

function onClick(){
  visible.value = true;
};
</script>
