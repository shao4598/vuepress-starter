# 树 Tree

默认展开根节点。

:artist: 内容过多时，无操作的树用滚动条。有操作的树需要设计稿明示。

额外节点右对齐，从右向左排列。

复选框默认不开启级连勾选（严格模式）。

默认关闭虚拟列表。

<a-card>
  <a-space direction="vertical">
    <span>是否开启级连勾选</span>
    <a-switch v-model="isCheckStrictly" />
  </a-space>
  <a-tree
    :blockNode="true"
    :checkable="true"
    :data="treeData"
    :check-strictly="isCheckStrictly"
  >
    <template #extra="nodeData">
      <icon-eye/>
      <icon-star-fill />
    </template>
  </a-tree>
</a-card>

<script lang="ts" setup>
import { ref } from 'vue';

const isCheckStrictly = ref(false)

const treeData = ref([{
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
}]);
</script>
