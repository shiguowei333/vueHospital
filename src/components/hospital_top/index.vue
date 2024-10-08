<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="@/assets/images/logo.png">
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p>登录/注册 </p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
  .top {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 1px 5px rgb(218, 211, 211);
    .content {
      width: 70%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        align-items: center;
        img {
          height: 60px;
          margin-right: 20px;
        }
        p {
          font-size: 30px;
          color: #55a6fe;
        }
      }

      .right {
        display: flex;
        align-items: center;
        font-size: 18px;
        color: #aaa;
        .help {
          margin-right: 10px;
        }
      }

    }
  }
</style>