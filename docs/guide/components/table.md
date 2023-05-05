# 表格 Table

内容过多时，优先前置省略号

行选中时，自动勾选行选择器

单元格全部加Tooltip

优先行选择器+全局操作按钮。行操作按钮需要设计稿明示

数字右对齐，其它左对齐

提交表单后，刷新表格，且不要删除查询条件

如果没有分页，则需要开启虚拟列表

TODO：表头带排序标记

## 分页 Pagination

全功能

每页条数：10/20（默认）/50/100/200/500

表格内滚动

位置在页面右下角

<a-card>
  <a-table
    row-key="key"
    :columns="columns"
    :data="data"
    :row-selection="rowSelection"
    v-model:selectedKeys="selectedKeys"
    :pagination="pagination"
    @row-click="rowClick"
  />
</a-card>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const selectedKeys = ref([]);

const rowSelection = reactive({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: true,
});
const pagination = {
  showTotal: true,
  showJumper: true,
  showPageSize: true,
  pageSizeOptions: [10, 20, 50, 100, 200, 500],
  defaultPageSize: 20
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    tooltip: true,
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    ellipsis: true,
    tooltip: true,
    align: 'right'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    ellipsis: true,
    tooltip: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    ellipsis: true,
    tooltip: true,
  },
]

const data = reactive([]);

for(let i=0; i < 10000; i++){
  data.push({
    key: i.toString(),
    name: 'Jane Doe',
    salary: Math.random().toFixed(5)*10000,
    address: `${i} Park Road, London`,
    email: 'jane.doe@example.com'
  })
}

function rowClick(record) {
  console.log(selectedKeys.value)
  const index = selectedKeys.value.indexOf(record.key);
  if (index === -1) {
    selectedKeys.value.push(record.key)
    return
  }
  selectedKeys.value.splice(index, 1);
}
</script>
