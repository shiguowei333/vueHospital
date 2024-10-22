<template>
        <div class="login_register">
            <el-dialog v-model="isShow" title="用户登录" width="800">
    
            </el-dialog>
        </div>
</template>
    
<script setup>
    import { ref } from 'vue'
    let isShow = ref(true)
</script>
    
<style scoped lang="less">
    
</style>