<template>
  <div>
    <!-- 顶部导航栏 -->
    <Carousel></Carousel>
    <!-- 搜索栏 -->
    <Search></Search>
    <!-- 底部医院结构 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <Level @getHospitalLevel="getHospitalLevel"></Level>
        <Region @getHospitalRegion="getHospitalRegion"></Region>
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
  //分页数据
  let pageNo = ref(1)
  let pageSize = ref(10)
  //地区/等级信息
  let hostype = ref('')
  let districtCode = ref('')

  let hospitalInfoArr = ref([])

  let total = ref(0)

  onMounted(() => {
    getHospitalInfo()
  })

  //获取医院数据，渲染到响应式
  const getHospitalInfo = async() => {
    let resp = await requestHospital(pageNo.value,pageSize.value,hostype.value,districtCode.value)
    if(resp.code === 200) {
      hospitalInfoArr.value = resp.data.content
      total.value = resp.data.totalElements
    }
  }

  //分页查询医院数据
  const change = () => {
    getHospitalInfo()
  }

  //子组件自定义事件获取医院等级
  const getHospitalLevel = (level) => {
    hostype.value = level
  }

  //子组件自定义事件获取医院地区编码
  const getHospitalRegion = (code) => {
    districtCode.value = code
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