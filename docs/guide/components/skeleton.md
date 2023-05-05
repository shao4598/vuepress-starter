# 骨架屏 Skeleton

非表单类优先用Skeleton

使用动画效果

<a-card>
  <a-skeleton animation>
    <a-space direction="vertical" style="width:100%" size="large">
      <a-skeleton-shape />
      <a-skeleton-line :rows="3" />
    </a-space>
  </a-skeleton>
</a-card>

```vue{3}
<template>
  <a-skeleton
    animation
  >
    <a-space direction="vertical" style="width:100%" size="large">
      <a-skeleton-shape />
      <a-skeleton-line :rows="3" />
    </a-space>
  </a-skeleton>
</template>
```
