<template>
        <div class="login_register">
            <el-dialog v-model="userStore.visiable" title="用户登录" width="800">
                <div class="content">
                    <el-row>
                        <el-col :span="12">
                            <div class="login">
                                <el-form>
                                    <el-form-tiem>
                                        <el-input placeholder="请输入您的手机号码" :prefix-icon="User"></el-input>
                                    </el-form-tiem>
                                    <el-form-tiem>
                                        <el-input placeholder="请输入手机验证码" :prefix-icon="Lock"></el-input>
                                    </el-form-tiem>
                                    <el-form-tiem>
                                        <el-button>获取验证码</el-button>
                                    </el-form-tiem>
                                </el-form>
                                <div class="bottom">
                                    <el-button style="width: 90%;" type="primary" size="default">用户登录</el-button>
                                    <p>微信扫码登录</p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12"></el-col>
                    </el-row>
                </div>
            </el-dialog>
        </div>
</template>
    
<script setup>
    import userUserStore from '@/store/modules/user'
    import { User,Lock } from '@element-plus/icons-vue'

    let userStore = userUserStore()
</script>
    
<style scoped lang="less">
    .login_register { 
        ::v-deep(.el-dialog__body) {
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
        }

        .login {
            border: 1px solid #ccc;
            padding: 20px;
        }
    }
</style>