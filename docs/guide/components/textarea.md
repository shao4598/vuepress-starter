# 文本域 Textarea

字数统计。

placeholder 默认显示“请输入内容”。

<a-card>
  <a-textarea
    show-word-limit
    :max-length="500"
    placeholder="请输入内容"
  />
</a-card>

```vue{3-5}
<template>
  <a-textarea
    show-word-limit
    :max-length="500"
    placeholder="请输入内容"
  />
</template>
```
