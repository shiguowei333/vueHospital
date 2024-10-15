<template>
    <div class="close">
        <div class="info">
            <h1>{{ hospitalName }}停诊信息</h1>
            <el-empty description="暂无数据" />
        </div>
    </div>
</template>
    
<script setup>
    import useDetailStore from '@/store/modules/hospitalDetail.js'
    import { ref, watch } from 'vue'
    let hospitalStore = useDetailStore()
    let hospitalName = ref('')

    watch(() => hospitalStore.hospitalInfo,(value) => {
      if(value.hospital) {
        hospitalName.value = value.hospital.hosname
      }
    },{
      immediate: true
    })
</script>
    
<style scoped lang="less">
    .info {
        h1 {
            font-size: 30px;
            text-align: center;
        }
    }
</style>