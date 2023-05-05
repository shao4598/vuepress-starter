# 折叠面板 Collapse

## 手风琴

默认手风琴，展开顶满高度。

<a-card>
  <a-collapse
    accordion
  >
    <a-collapse-item header="呼叫组" key="1">
      <div>呼叫组</div>
    </a-collapse-item>
    <a-collapse-item header="常用组" key="2">
      <div>常用组</div>
    </a-collapse-item>
    <a-collapse-item header="监听组" key="3">
      <div>监听组</div>
    </a-collapse-item>
  </a-collapse>
</a-card>

<style lang="less" scoped>
:deep(.arco-collapse-item-content-expend) {
    height: calc(100vh - 340px) !important;
}
</style>

```vue{3,18-20}
<template>
  <a-collapse
    accordion
  >
    <a-collapse-item header="呼叫组" key="1">
      <div>呼叫组</div>
    </a-collapse-item>
    <a-collapse-item header="常用组" key="2">
      <div>常用组</div>
    </a-collapse-item>
    <a-collapse-item header="监听组" key="3">
      <div>监听组</div>
    </a-collapse-item>
  </a-collapse>
</template>

<style lang="less" scoped>
:deep(.arco-collapse-item-content-expend) {
    height: calc(100vh - 340px) !important;
}
</style>
```
