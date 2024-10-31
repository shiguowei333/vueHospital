<template>
        <div class="login_register">
            <el-dialog v-model="userStore.visiable" title="用户登录" width="800">
    
            </el-dialog>
        </div>
</template>
    
<script setup>
    import userUserStore from '@/store/modules/user'
    let userStore = userUserStore()
</script>
    
<style scoped lang="less">
    
</style>