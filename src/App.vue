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
      height: 4000px;
      margin-top: 100px;
    }
  }
</style>