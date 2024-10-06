<template>
  <el-carousel height="400px">
    <el-carousel-item v-for="item in 4" :key="item">
      <img src="@/assets/images/web-banner1.png" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>

</script>

<style scoped lang="less">
  img {
    width: 100%;
    height: 100%;
  }
</style>