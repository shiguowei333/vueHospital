<template>
  <div class="container">
    <HospitalTop></HospitalTop>
    <div class="content">
      <router-view></router-view>
    </div>
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
      width: 70%;
      margin-top: 70px;
    }
  }
</style>