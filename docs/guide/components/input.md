# 输入框 Input

## 一般场景

允许清空

字数统计

placeholder 默认显示“请输入内容”

<a-card>
  <a-input
    allow-clear
    show-word-limit
    :max-length="20"
    placeholder="请输入内容"
    style="width:320px"
  />
</a-card>

```vue{3-6}
<template>
  <a-input
    allow-clear
    show-word-limit
    :max-length="20"
    placeholder="请输入内容"
    style="width:320px"
  />
</template>
```

## 搜索场景

允许清空

不加字数统计，限制最大输入长度500

placeholder 默认显示“请输入关键字”

<a-card>
  <a-space>
    <a-input
      allow-clear
      :max-length="500"
      placeholder="请输入关键字"
      style="width:320px"
    />
    <a-button type="primary">
      <template #icon>
        <icon-search />
      </template>
    </a-button>
  </a-space>
</a-card>

```vue{3-6}
<template>
  <a-input
    allow-clear
    :max-length="500"
    placeholder="请输入关键字"
    style="width:320px"
  />
</template>
```
