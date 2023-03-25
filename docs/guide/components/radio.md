# 单选框 Radio

## 排列方向

:artist: 默认横向排列，由设计师明示是否竖向排列。

<a-card>
  <a-radio-group>
    <a-radio value="1">男</a-radio>
    <a-radio value="2">女</a-radio>
    <a-radio value="3">未知</a-radio>
  </a-radio-group>
</a-card>

```vue
<template>
  <a-radio-group>
    <a-radio value="1">男</a-radio>
    <a-radio value="2">女</a-radio>
    <a-radio value="3">未知</a-radio>
  </a-radio-group>
</template>
```

## 按钮类型

:artist: 默认关闭，由设计师明示是否启用。

<a-card>
  <a-radio-group type="button">
    <a-radio value="1">一级警情</a-radio>
    <a-radio value="2">二级警情</a-radio>
    <a-radio value="3">三级警情</a-radio>
  </a-radio-group>
</a-card>

```vue{3}
<template>
  <a-radio-group
    type="button"
  >
    <a-radio value="1">一级警情</a-radio>
    <a-radio value="2">二级警情</a-radio>
    <a-radio value="3">三级警情</a-radio>
  </a-radio-group>
</template>
```

