<template>
  <div class="container">
    <!-- 全局头部导航栏 -->
    <HospitalTop></HospitalTop>
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 全局底部信息栏 -->
    <HospitalBottom></HospitalBottom>
  </div>
</template>

<script setup>
</script>

<style scoped lang="less">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
      width: 80%;
      margin-top: 70px;
    }
  }
</style>