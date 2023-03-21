# 折叠面板 Collapse

* 默认手风琴，展开顶满高度

<a-collapse 
  :default-active-key="[1]"
  accordion>
  <a-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="1">
    <div>Beijing Toutiao Technology Co., Ltd.</div>
  </a-collapse-item>
  <a-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="2">
    <div>Beijing Toutiao Technology Co., Ltd.</div>
  </a-collapse-item>
  <a-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="3">
    <div>Beijing Toutiao Technology Co., Ltd.</div>
  </a-collapse-item>
</a-collapse>

```vue{3}
<a-collapse 
  :default-active-key="[1]"
  accordion>
  <a-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="1">
    <div>Beijing Toutiao Technology Co., Ltd.</div>
  </a-collapse-item>
  <a-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="2">
    <div>Beijing Toutiao Technology Co., Ltd.</div>
  </a-collapse-item>
  <a-collapse-item header="Beijing Toutiao Technology Co., Ltd." key="3">
    <div>Beijing Toutiao Technology Co., Ltd.</div>
  </a-collapse-item>
</a-collapse>
```