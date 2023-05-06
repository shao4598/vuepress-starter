# 穿梭框 Transfer

如果数据需要以多列形式展示，应使用Table与最简单的分页

穿梭后，左侧置为disable

<a-transfer
  :data="data"
  :default-value="value"
>
</a-transfer>

<script lang="ts" setup>
const data = Array(8).fill(undefined).map((_, index) => ({
  value: `option${index + 1}`,
  label: `Option ${index + 1}`
}));
const value = ['option1', 'option3', 'option5'];
</script>
