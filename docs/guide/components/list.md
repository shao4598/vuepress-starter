# 列表 List

* 列表一次全量获取数据，开启虚拟滚动

<a-list
  :style="{ width: `600px` }"
  :virtualListProps="{
    height: 560,
  }"
  :data="list"
>
  <template #item="{ item, index }">
    <a-list-item :key="index">
      <a-list-item-meta
        :title="item.title"
        :description="item.description"
      >
        <template #avatar>
          <a-avatar shape="square">
            A
          </a-avatar>
        </template>
      </a-list-item-meta>
    </a-list-item>
  </template>
</a-list>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const list = reactive(Array(10000).fill(null).map((_, index) => {
      const prefix = `0000${index}`.slice(-5);
      return {
        title: 'Beijing Bytedance Technology Co., Ltd.',
        description: `(${prefix}) Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.`,
      };
    }))

    return {
      list
    }
  },
}
</script>

```vue{3-5}
<a-list
  :style="{ width: `600px` }"
  :virtualListProps="{
    height: 560,
  }"
  :data="list"
>
  <template #item="{ item, index }">
    <a-list-item :key="index">
      <a-list-item-meta
        :title="item.title"
        :description="item.description"
      >
        <template #avatar>
          <a-avatar shape="square">
            A
          </a-avatar>
        </template>
      </a-list-item-meta>
    </a-list-item>
  </template>
</a-list>
```