<template>
  <div class="container">
    <!-- 全局头部导航栏 -->
    <HospitalTop></HospitalTop>
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 全局底部信息栏 -->
    <HospitalBottom></HospitalBottom>
    <!-- 登录组件 -->
    <Login/>
  </div>
</template>

<script setup>
</script>

<style scoped lang="less">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    .content {
      flex: 1;
      width: 80%;
      margin-top: 75px;
    }
  }
</style>