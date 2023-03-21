# 标签页 Tabs

* 只有一层，Line模式

<a-tabs default-active-key="2">
  <a-tab-pane key="1" title="Tab 1">
    Content of Tab Panel 1
  </a-tab-pane>
  <a-tab-pane key="2" title="Tab 2">
    Content of Tab Panel 2
  </a-tab-pane>
  <a-tab-pane key="3">
    <template #title>Tab 3</template>
    Content of Tab Panel 3
  </a-tab-pane>
</a-tabs>

* 多层
    
    * 第一层Card模式
    
    * 第二层Line模式
    
    * 第三层Rounded模式

<a-tabs default-active-key="1" type="card">
  <a-tab-pane key="1" title="Tab 1">
    <a-tabs default-active-key="1" type="line">
      <a-tab-pane key="1" title="Tab 1">
        <a-tabs default-active-key="1" type="rounded">
          <a-tab-pane key="1" title="Tab 1">
            Content of Tab Panel 1
          </a-tab-pane>
          <a-tab-pane key="2" title="Tab 2">
            Content of Tab Panel 2
          </a-tab-pane>
          <a-tab-pane key="3">
            <template #title>Tab 3</template>
            Content of Tab Panel 3
          </a-tab-pane>
        </a-tabs>
      </a-tab-pane>
      <a-tab-pane key="2" title="Tab 2">
        Content of Tab Panel 2
      </a-tab-pane>
      <a-tab-pane key="3">
        <template #title>Tab 3</template>
        Content of Tab Panel 3
      </a-tab-pane>
    </a-tabs>
  </a-tab-pane>
  <a-tab-pane key="2" title="Tab 2">
    Content of Tab Panel 2
  </a-tab-pane>
  <a-tab-pane key="3">
    <template #title>Tab 3</template>
    Content of Tab Panel 3
  </a-tab-pane>
</a-tabs>

```vue{1,3,5}
<a-tabs default-active-key="1" type="card">
  <a-tab-pane key="1" title="Tab 1">
    <a-tabs default-active-key="1"  type="line">
      <a-tab-pane key="1" title="Tab 1">
        <a-tabs default-active-key="1" type="rounded">
          <a-tab-pane key="1" title="Tab 1">
            Content of Tab Panel 1
          </a-tab-pane>
          <a-tab-pane key="2" title="Tab 2">
            Content of Tab Panel 2
          </a-tab-pane>
          <a-tab-pane key="3">
            <template #title>Tab 3</template>
            Content of Tab Panel 3
          </a-tab-pane>
        </a-tabs>
      </a-tab-pane>
      <a-tab-pane key="2" title="Tab 2">
        Content of Tab Panel 2
      </a-tab-pane>
      <a-tab-pane key="3">
        <template #title>Tab 3</template>
        Content of Tab Panel 3
      </a-tab-pane>
    </a-tabs>
  </a-tab-pane>
  <a-tab-pane key="2" title="Tab 2">
    Content of Tab Panel 2
  </a-tab-pane>
  <a-tab-pane key="3">
    <template #title>Tab 3</template>
    Content of Tab Panel 3
  </a-tab-pane>
</a-tabs>
```