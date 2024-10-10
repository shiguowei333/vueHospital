<template>
  <div class="search">
    <div class="searchBox">
      <el-autocomplete 
      clearable 
      placeholder="请输入医院名称"
      v-model="key"
      :fetch-suggestions="fetchSuggestions"
      :trigger-on-focus="false"
      @select="goDetail"
      />
      <el-button type="primary" size="large" :icon="Search">搜索</el-button>
    </div>
  </div>
</template>

<script setup>
  import { Search } from '@element-plus/icons-vue'
  import { ref } from 'vue'
  import { requestHospitalName } from '@/api/home'
  import { useRouter } from 'vue-router'

  let key = ref('')
  let $router = useRouter()

  const fetchSuggestions = async (keyWord,cb) => {
    let result = await requestHospitalName(keyWord)
    let showData = result.data.map((item) => {
      return {
        value: item.hosname,
        hoscode: item.hoscode
      }
    })
    cb(showData)
  }

  const goDetail = (item) => {
    $router.push({path: '/hospital'})
  }
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