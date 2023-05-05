# 气泡卡片 Popover

## 弹出方向

点击弹出，默认方向向上。

<a-card>
  <a-popover
    trigger="click"
  >
    <a-button type="primary">
      按经纬度查询地址
      <template #icon>
        <icon-location />
      </template>
    </a-button>
    <template #content>
      <a-space>
        <a-input
          :style="{ width: '160px' }"
          placeholder="经度"
          allow-clear
        />
        <a-input
          :style="{ width: '160px' }"
          placeholder="纬度"
          allow-clear
        />
        <a-button type="primary">
          <template #icon>
            <icon-search />
          </template>
        </a-button>
      </a-space>
    </template>
  </a-popover>
</a-card>

```vue{3}
<template>
  <a-popover
    trigger="click"
  >
    <a-button type="primary">
      按经纬度查询地址
      <template #icon>
        <icon-location />
      </template>
    </a-button>
    <template #content>
      <a-space>
        <a-input
          :style="{ width: '160px' }"
          placeholder="经度"
          allow-clear
        />
        <a-input
          :style="{ width: '160px' }"
          placeholder="纬度"
          allow-clear
        />
        <a-button type="primary">
          <template #icon>
            <icon-search />
          </template>
        </a-button>
      </a-space>
    </template>
  </a-popover>
</template>
```
