<template>
    <div class="region">
      <div class="content">
        <div class="left">地区：</div>
        <ul class="right">
          <li :class="{active: regionLightFlag === ''}" @click="changeLightFlag('')" >全部</li>
          <li v-for="item in regionlList" 
          :key="item.value"
          :class="{active: regionLightFlag === item.value}"
          @click="changeLightFlag(item.value)"
          >{{ item.name }}</li>
        </ul>
      </div>
    </div>
</template>
  
<script setup>
  import { requestHospitalLevelOrRegion } from '@/api/home'
  import { ref, onMounted } from 'vue'

  //获取自定义事件触发函数
  const $emit = defineEmits(['getHospitalRegion'])

  const regionlList = ref([])

  // 控制选择地区高亮效果
  let regionLightFlag = ref('')

  //初始化渲染地区列表数据
  onMounted(() => {
    getRegion()
  })

  //获取地区列表数据，渲染响应式
  const getRegion = async () => {
    let result = await requestHospitalLevelOrRegion('Beijin')
    regionlList.value = result.data
  }

  //修改高亮显示效果
  const changeLightFlag = (value) => {
    regionLightFlag.value = value
    $emit('getHospitalRegion',value)
  }
</script>
  
<style scoped lang="less">
  .region {
    color: #7f7f7f;
    margin: 10px 0;
    .content {
      display: flex;
      .left {
        margin-right: 10px;
        flex-shrink: 0;
      }
      .right {
        display: flex;
        flex-wrap: wrap;
        li {
          margin-bottom: 10px;
          margin-right: 10px;
          &.active {
            color: #55a6fe;
          }
          &:hover {
            color: #55a6fe;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>