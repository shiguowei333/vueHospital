<template>
  <div class="search">
    <div class="searchBox">
      <el-autocomplete clearable placeholder="请输入医院名称"/>
      <el-button type="primary" size="large" :icon="Search">搜索</el-button>
    </div>
  </div>
</template>

<script setup>
  import { Search } from '@element-plus/icons-vue'
</script>

<style scoped lang="less">
  .search {
    width: 100%;
    height: 100px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .searchBox {
      width:800px;
      display: flex;
      justify-content: center;
      align-items: center;
      :deep(.el-input__wrapper) {
        height: 40px;
        margin-right: 1px;
      }
    }
  }
</style>