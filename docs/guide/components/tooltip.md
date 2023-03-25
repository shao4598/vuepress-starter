# 文字气泡 Tooltip

## 弹出方向

使用默认方向向上

<a-card>
  <a-tooltip content="全屏">
    <icon-fullscreen />
  </a-tooltip>
</a-card>

```vue
<template>
  <a-tooltip content="全屏">
    <icon-fullscreen />
  </a-tooltip>
</template>
```

## 应用场景

用于解释图标

<a-card>
  <a-space>
    <a-tooltip content="新增">
      <a-button type="primary">
        <template #icon>
          <icon-plus />
        </template>
      </a-button>
    </a-tooltip>
    <a-tooltip content="编辑">
      <a-button type="primary">
        <template #icon>
          <icon-edit />
        </template>
      </a-button>
    </a-tooltip>
    <a-tooltip content="删除">
      <a-button type="primary">
        <template #icon>
          <icon-delete />
        </template>
      </a-button>
    </a-tooltip>
  </a-space>
</a-card>

用于显示被省略的内容


