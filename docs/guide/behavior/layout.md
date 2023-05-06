# 布局 Layout

至少支持亮色模式与暗黑模式。

>参照本网站右上角切换亮暗按钮

:artist: 最小分辨率1366x768，低于最小分辨率出滚动条。1366x768 ～ 1920x1080区间，使用自适应，尽量不折行。具体情况以设计师意见为准。

时钟要用等宽字体。

<a-card>
  <div class="time">{{ time }}</div>
</a-card>

<script lang="ts" setup>
import dayjs from 'dayjs'
const time = dayjs().format('YYYY-MM-DD HH:mm:ss')
</script>

<style lang="less" scoped>
@import "@arco-design/web-vue/es/style/theme/global.less";
@font-face {
  font-family: H-Dianzibiao;
  src: url('/H-Dianzibiao.ttf');
}
.time {
  font-family: H-Dianzibiao;
  color: @success-6;
  font-size: @font-size-title-3;
}
</style>

