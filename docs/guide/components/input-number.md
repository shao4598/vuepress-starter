# 数字输入框 InputNumber

## 应用场景

只有在“排序”等少量场景下使用数字输入框

<a-card>
  <a-space direction="vertical">
    <span>排序</span>
    <a-input-number
      style="width:320px"
      placeholder="请输入内容"
      :min="1"
    />
  </a-space>
</a-card>


## 按钮模式

不使用按钮模式

:x:

<a-card>
  <a-input-number
    style="width:320px"
    placeholder="请输入内容"
    mode="button"
    :min="1"
  />
</a-card>

:white_check_mark:

<a-card>
  <a-input-number
    style="width:320px"
    placeholder="请输入内容"
    :min="1"
  />
</a-card>
