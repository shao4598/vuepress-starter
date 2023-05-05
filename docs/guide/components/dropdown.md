# 下拉菜单 Dropdown

:artist: 默认没有向下图标，由设计师明示是否有向下图标。

<a-card>
  <a-dropdown>
    <a-button>
      地图类型
      <icon-down/>
    </a-button>
    <template #content>
      <a-doption>在线</a-doption>
      <a-doption>离线</a-doption>
    </template>
  </a-dropdown>
</a-card>

```vue{5}
<template>
  <a-dropdown>
    <a-button>
      地图类型
      <icon-down/>
    </a-button>
    <template #content>
      <a-doption>在线</a-doption>
      <a-doption>离线</a-doption>
    </template>
  </a-dropdown>
</template>
```
