<template>
  <div class="bottom">
    <div class="content">
      <div class="left">
        鲁ICP备 123456789 电话号码13333333333
      </div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
  .bottom {
    width: 100%;
    height: 100px;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .content {
      width: 80%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      .right {
        span {
          margin: 0 5px;
        }
      }
    }
  }
</style>