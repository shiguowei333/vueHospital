<template>
    <div class="level">
      <h1>医院</h1>
      <div class="content">
        <div class="left">等级：</div>
        <ul class="hospital">
          <li :class="{active: levelLightFlag === ''}" @click="changeLightFlag('')" >全部</li>
          <li v-for="item in levelList"
          :key="item.value"
          :class="{active: levelLightFlag === item.value}"
          @click="changeLightFlag(item.value)"
          >
          {{item.name}}
          </li>
        </ul>
      </div>
    </div>
</template>
  
<script setup>
  import { requestHospitalLevelOrRegion } from '@/api/home'
  import { ref, onMounted } from 'vue'

  //获取自定义事件触发函数
  const $emit = defineEmits(['getHospitalLevel'])

  const levelList = ref([])

  // 控制选择等级高亮效果
  let levelLightFlag = ref('')

  //初始化等级列表数据
  onMounted(() => {
    getLevel()
  })

  //获取等级数据，渲染响应式
  const getLevel = async () => {
    let result = await requestHospitalLevelOrRegion('HosType')
    levelList.value = result.data
  }

  //修改高亮显示效果
  const changeLightFlag = (value) => {
    levelLightFlag.value = value
    $emit('getHospitalLevel',value)
  }


</script>
  
<style scoped lang="less">
  .level {
    color: #7f7f7f;
    h1 {
      font-weight: 900;
      margin: 10px 0;
    }

    .content {
      display: flex;
      .left {
        margin-right: 10px;
        flex-shrink: 0;
      }
      .hospital {
        display: flex;
        li {
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