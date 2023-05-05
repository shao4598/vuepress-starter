# 加载中 Spin

表单类优先用spin

<a-card>
  <a-spin
    loading
    style="width:100%"
  >
    <a-card>
      <a-form
        layout="vertical"
        :model="formState"
      >
        <a-form-item label="用户名">
          <a-input v-model="formState.name" placeholder="请输入用户名" />
        </a-form-item>
        <a-form-item label="年龄">
          <a-input-number v-model="formState.age" placeholder="请输入年龄" />
        </a-form-item>
      </a-form>
    </a-card>
  </a-spin>
</a-card>

<script lang="ts" setup>
import { reactive } from 'vue';

const formState = reactive({
  name: '',
  age: undefined,
});
</script>
