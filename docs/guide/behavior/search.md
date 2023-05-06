# 搜索 Search

查询条件空间不够，并且存在多个关键信息分开的查询条件，建议合并成一个关键字查询条件。placeholder显示“请输入关键字”。

所有输入框按回车触发搜索。其它组件不触发搜索。

<a-card>
  <a-input-search
    placeholder="请输入搜索内容"
    @press-enter="onSearch"
    @search="onSearch"
  />
</a-card>

输入时触发关键字模糊匹配，下拉列表显示匹配结果；回车/点击按钮触发按ID精确搜索。

下拉列表：可通过鼠标点击触发按ID精确搜索。

下拉列表：可按上下方向键控制，回车键触发按ID精确搜索。

<a-card>
  <a-select
    style="width:320px"
    placeholder="请输入搜索内容"
    allow-search
    allow-clear
  >
    <a-option>北京</a-option>
    <a-option>上海</a-option>
    <a-option>广东</a-option>
    <a-option>深圳</a-option>
    <a-option>成都</a-option>
    <a-option>武汉</a-option>
  </a-select>
</a-card>

针对树的搜索结果：筛选+父级路径+关键字高亮。不做下拉框搜索建议。

<a-card>
  <a-input-search
    style="margin-bottom: 8px; max-width: 240px"
    v-model="searchKey"
  />
  <a-tree
    :data="treeData"
  >
    <template #title="nodeData">
      <template v-if="index = getMatchIndex(nodeData?.title), index < 0">{{ nodeData?.title }}</template>
      <span v-else>
        {{ nodeData?.title?.substr(0, index) }}
        <span style="color: var(--color-success-light-4);">
          {{ nodeData?.title?.substr(index, searchKey.length) }}
        </span>{{ nodeData?.title?.substr(index + searchKey.length) }}
      </span>
    </template>
  </a-tree>
</a-card>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { Message } from '@arco-design/web-vue';

function onSearch(){
  Message.info('已触发搜索')
}

const { searchKey, treeData, getMatchIndex } = useSearchTree()

/**
 * 针对树的搜索结果
 */
function useSearchTree(){
  const originTreeData = [{
    "title": "黑龙江省公安厅",
    "key": "230000",
    "children": [
        {
            "title": "哈尔滨市局",
            "key": "230100",
            "children": [
                {
                    "title": "道里区分局",
                    "key": "230102"
                },
                {
                    "title": "南岗区分局",
                    "key": "230103"
                },
                {
                    "title": "道外区分局",
                    "key": "230104"
                },
                {
                    "title": "平房区分局",
                    "key": "230108"
                },
                {
                    "title": "松北区分局",
                    "key": "230109"
                },
                {
                    "title": "香坊区分局",
                    "key": "230110"
                },
                {
                    "title": "呼兰区分局",
                    "key": "230111"
                },
                {
                    "title": "阿城区分局",
                    "key": "230112"
                },
                {
                    "title": "双城区分局",
                    "key": "230113"
                }
            ]
        },
        {
            "title": "齐齐哈尔市局",
            "key": "230200",
            "children": [
                {
                    "title": "龙沙区分局",
                    "key": "230202"
                },
                {
                    "title": "建华区分局",
                    "key": "230203"
                },
                {
                    "title": "铁锋区分局",
                    "key": "230204"
                },
                {
                    "title": "富拉尔基区分局",
                    "key": "230206"
                },
                {
                    "title": "昂昂溪区分局",
                    "key": "230205"
                },
                {
                    "title": "碾子山区分局",
                    "key": "230207"
                },
                {
                    "title": "梅里斯达斡尔族区分局",
                    "key": "230208"
                }
            ]
        },
        {
            "title": "牡丹江市局",
            "key": "231000",
            "children": [
                {
                    "title": "东安区分局",
                    "key": "231002"
                },
                {
                    "title": "阳明区分局",
                    "key": "231003"
                },
                {
                    "title": "爱民区分局",
                    "key": "231004"
                },
                {
                    "title": "西安区分局",
                    "key": "231005"
                }
            ]
        },
        {
            "title": "佳木斯市局",
            "key": "230800",
            "children": [
                {
                    "title": "向阳区分局",
                    "key": "230803"
                },
                {
                    "title": "前进区分局",
                    "key": "230804"
                },
                {
                    "title": "东风区分局",
                    "key": "230805"
                },
                {
                    "title": "郊区分局",
                    "key": "230811"
                }
            ]
        }
    ]
  }]

  const searchKey = ref('');
  const treeData = computed(() => {
    if (!searchKey.value) return originTreeData;
    return searchData(searchKey.value);
  })

  function searchData(keyword) {
    const loop = (data) => {
      const result = [];
      data.forEach(item => {
        if (item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
          result.push({...item});
        } else if (item.children) {
          const filterData = loop(item.children);
          if (filterData.length) {
            result.push({
              ...item,
              children: filterData
            })
          }
        }
      })
      return result;
    }

    return loop(originTreeData);
  }

  function getMatchIndex(title) {
    if (!searchKey.value) return -1;
    return title.toLowerCase().indexOf(searchKey.value.toLowerCase());
  }

  return {
    searchKey,
    treeData,
    getMatchIndex
  }
}
</script>
