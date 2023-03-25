# 开关 Switch

## 应用场景

单一开启/关闭场景，使用开关。

<a-card>
  <a-space>
    <a-switch>
      <template #checked>
        ON
      </template>
      <template #unchecked>
        OFF
      </template>
    </a-switch>
    <span>路况</span>
  </a-space>
</a-card>

## Label 位置

在表单中，使用标单项的 Label。

<a-card>
  <a-form :model="{}" layout="vertical">
    <a-form-item
      label="路况"
    >
      <a-switch />
    </a-form-item>
  </a-form>
</a-card>

```vue{4}
<template>
  <a-form layout="vertical">
    <a-form-item
      label="路况"
    >
      <a-switch />
    </a-form-item>
  </a-form>
</template>
```

不在表单中，将 Label 放在开关右侧。

<a-card>
  <a-space>
    <a-switch>
      <template #checked>
        ON
      </template>
      <template #unchecked>
        OFF
      </template>
    </a-switch>
    <span>路况</span>
  </a-space>
</a-card>

```vue{11}
<template>
  <a-space>
    <a-switch>
      <template #checked>
        ON
      </template>
      <template #unchecked>
        OFF
      </template>
    </a-switch>
    <span>路况</span>
  </a-space>
</template>
```

## 自定义文案

在表单内，且有 Label 情况下，不加自定义文案。

<a-card>
  <a-form :model="{}" layout="vertical">
    <a-form-item
      label="路况"
    >
      <a-switch />
    </a-form-item>
  </a-form>
</a-card>

```vue{6}
<template>
  <a-form layout="vertical">
    <a-form-item
      label="路况"
    >
      <a-switch />
    </a-form-item>
  </a-form>
</template>
```

其余情况需要加开关文案。

<a-card>
  <a-space>
    <a-switch>
      <template #checked>
        ON
      </template>
      <template #unchecked>
        OFF
      </template>
    </a-switch>
    <span>路况</span>
  </a-space>
</a-card>

```vue{4-9}
<template>
  <a-space>
    <a-switch>
      <template #checked>
        ON
      </template>
      <template #unchecked>
        OFF
      </template>
    </a-switch>
    <span>路况</span>
  </a-space>
</template>
```
