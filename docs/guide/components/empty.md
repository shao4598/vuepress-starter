# 空状态 Empty

自定义组件，需要“空状态”设计稿

<div class="background">
  <icon-align-left class="icon-fold" />
  <!-- 座席接警信息 -->
  <div class="content">
      <div class="logo"></div>
      <div class="tip">
        没有坐席，请绑定
      </div>
  </div>
</div>

<script lang="ts" setup>
const seatinfo  = {}
const userStore = {};
function $t(){}
</script>

<style lang="less" scoped>
@import "@arco-design/web-vue/es/style/theme/global.less";
.background {
  width: @size-50*2+60;
  height: @size-50+140;
  box-sizing: border-box;
  background-image: linear-gradient(180deg, #1254AD 0%, #1356AE 10%, #00B7FF 100%);
  padding: @size-4;
  position: relative;
  border-radius: @border-radius-medium @border-radius-medium 0 0;
  .icon-fold {
    width: @size-5;
    height: @size-4;
    color: @color-white;
  }
  .content {
    width: @size-1*60;
    height: @size-31;
    margin: auto;
    .logo {
      height: @size-50;
      background: center/100% no-repeat url("/images/empty.webp");
      margin-bottom: @size-3;
    }
    .tip {
      height: @size-6;
      line-height: @size-6;
      text-align: center;
      background: var(--color-menu-light-bg);
      border-radius: 14px;
      color: @color-text-2
    }
  }
}
</style>
