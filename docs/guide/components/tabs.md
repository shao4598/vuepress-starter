# 标签页 Tabs

## 只有一层

不设置type，使用默认的Line模式
<a-card>
  <a-tabs default-active-key="2">
    <a-tab-pane key="1" title="实时警情">
      实时警情
    </a-tab-pane>
    <a-tab-pane key="2" title="我的警单">
      我的警单
    </a-tab-pane>
    <a-tab-pane key="3" title="暂存警单">
      暂存警单
    </a-tab-pane>
  </a-tabs>
</a-card>

```vue
<a-tabs default-active-key="2">
  <a-tab-pane key="1" title="实时警情">
    实时警情
  </a-tab-pane>
  <a-tab-pane key="2" title="我的警单">
    我的警单
  </a-tab-pane>
  <a-tab-pane key="3" title="暂存警单">
    暂存警单
  </a-tab-pane>
</a-tabs>
```

## 多层

第一层Card模式

第二层Line模式

第三层Rounded模式

<a-card>
  <a-tabs default-active-key="1" type="card">
    <a-tab-pane key="1" title="新增调派">
      <a-tabs default-active-key="1" type="line">
        <a-tab-pane key="1" title="就近调派">
          <a-tabs default-active-key="1" type="rounded">
            <a-tab-pane key="1" title="警力">
              警力
            </a-tab-pane>
            <a-tab-pane key="2" title="视频">
              视频
            </a-tab-pane>
            <a-tab-pane key="3" title="卡口">
              卡口
            </a-tab-pane>
            <a-tab-pane key="4" title="辖区">
              辖区
            </a-tab-pane>
            <a-tab-pane key="5" title="重点场所">
              重点场所
            </a-tab-pane>
            <a-tab-pane key="6" title="特殊情况">
              特殊情况
            </a-tab-pane>
          </a-tabs>
        </a-tab-pane>
        <a-tab-pane key="2" title="推荐单位">
          推荐单位
        </a-tab-pane>
        <a-tab-pane key="3" title="技能调派">
          技能调派
        </a-tab-pane>
        <a-tab-pane key="4" title="全部警力">
          全部警力
        </a-tab-pane>
      </a-tabs>
    </a-tab-pane>
    <a-tab-pane key="2" title="调派信息">
      调派信息
    </a-tab-pane>
    <a-tab-pane key="3" title="反馈信息">
      反馈信息
    </a-tab-pane>
  </a-tabs>
</a-card>

```vue{1,3,5}
<a-tabs default-active-key="1" type="card">
  <a-tab-pane key="1" title="新增调派">
    <a-tabs default-active-key="1" type="line">
      <a-tab-pane key="1" title="就近调派">
        <a-tabs default-active-key="1" type="rounded">
          <a-tab-pane key="1" title="警力">
            警力
          </a-tab-pane>
          <a-tab-pane key="2" title="视频">
            视频
          </a-tab-pane>
          <a-tab-pane key="3" title="卡口">
            卡口
          </a-tab-pane>
          <a-tab-pane key="4" title="辖区">
            辖区
          </a-tab-pane>
          <a-tab-pane key="5" title="重点场所">
            重点场所
          </a-tab-pane>
          <a-tab-pane key="6" title="特殊情况">
            特殊情况
          </a-tab-pane>
        </a-tabs>
      </a-tab-pane>
      <a-tab-pane key="2" title="推荐单位">
        推荐单位
      </a-tab-pane>
      <a-tab-pane key="3" title="技能调派">
        技能调派
      </a-tab-pane>
      <a-tab-pane key="4" title="全部警力">
        全部警力
      </a-tab-pane>
    </a-tabs>
  </a-tab-pane>
  <a-tab-pane key="2" title="调派信息">
    调派信息
  </a-tab-pane>
  <a-tab-pane key="3" title="反馈信息">
    反馈信息
  </a-tab-pane>
</a-tabs>
```
