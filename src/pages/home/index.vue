<template>
  <div>
    <!-- 顶部导航栏 -->
    <Carousel></Carousel>
    <!-- 搜索栏 -->
    <Search></Search>
    <!-- 底部医院结构 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <Level></Level>
        <Region></Region>
        <div class="cardList">
          <Card v-for="(item) in hospitalInfoArr" :key="item.id" class="item" :hospitalInfo="item"></Card>
        </div>
        <!-- 分页器 -->
        <div class="demo-pagination-block">
          <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 50, 100]"
            layout="->, prev, pager, next, sizes, total"
            :total="total"
            @change="change"
          />
        </div>
      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template>

<script setup>
  import Carousel from './carousel/index.vue'
  import Search from './search/index.vue'
  import Level from './level/index.vue'
  import Region from './region/index.vue'
  import Card from './card/index.vue'
  import {ref, onMounted} from 'vue'
  import { requestHospital } from '@/api/home'

  let pageNo = ref(1)
  let pageSize = ref(10)

  let hospitalInfoArr = ref([])

  let total = ref(0)

  onMounted(() => {
    getHospitalInfo()
  })

  const getHospitalInfo = async() => {
    let resp = await requestHospital(pageNo.value,pageSize.value)
    if(resp.code === 200) {
      hospitalInfoArr.value = resp.data.content
      total.value = resp.data.totalElements
    }
  }

  const change = (pageNo, pageSize) => {
    getHospitalInfo()
  }
</script>

<style scoped lang="less">
  .cardList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
    .item {
      width: 48%;
      margin: 10px 0;
      &:hover {
        cursor: pointer;
      }
    }
    :deep(.el-card) {
    max-width: 1000px !important;
    }
  } 
</style>