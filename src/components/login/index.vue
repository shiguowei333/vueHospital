<template>
        <div class="login_register">
            <el-dialog v-model="userStore.visiable" title="用户登录" @close="close">
                <div class="content">
                    <el-row>
                        <el-col :span="12">
                            <div class="login">
                                <div v-show="scene == 0">
                                  <el-form :model="userInfo" :rules="rule" ref="form">
                                    <el-form-item prop="phone">
                                        <el-input placeholder="请输入您的手机号码" :prefix-icon="User" v-model="loginPhone"></el-input>
                                    </el-form-item>
                                    <el-form-item prop="code">
                                        <el-input placeholder="请输入手机验证码" :prefix-icon="Lock" v-model="loginCode"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button :disabled="isPhone || isTime" @click="getCode">
                                          <span v-if="showFlag">获取验证码({{num}})</span>
                                          <span v-else>获取验证码</span>
                                        </el-button>
                                    </el-form-item>
                                    </el-form>
                                    <el-button style="width: 100%;" type="primary" size="default" :disabled="isPhone || loginCode.length !== 6" @click="login">用户登录</el-button>
                                    <div class="bottom" @click="changeScene">
                                        <p>微信扫码登录</p>
                                        <svg t="1730729982389" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4297" width="32" height="32"><path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z" fill="#28C445" p-id="4298"></path><path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z" fill="#28C445" p-id="4299"></path></svg>
                                    </div>
                                </div>
                                <div class="webChat" v-show="scene == 1">
                                  <p>微信扫码登录</p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="leftContent">
                            <div class="top">
                              <div class="item">
                                <img src="../../assets/images/testcode.png">
                                <svg t="1730729982389" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4297" width="16" height="16"><path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z" fill="#bfbfbf" p-id="4298"></path><path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z" fill="#bfbfbf" p-id="4299"></path></svg>
                                <p>微信扫一扫关注</p>
                                <p>"快速预约挂号"</p>
                              </div>
                              <div class="item">
                                <img src="../../assets/images/testcode.png">
                                <svg t="1730730539493" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5583" width="16" height="16"><path d="M256 85.333333h512c64.8 0 117.333333 52.533333 117.333333 117.333334v618.666666c0 64.8-52.533333 117.333333-117.333333 117.333334H256c-64.8 0-117.333333-52.533333-117.333333-117.333334V202.666667c0-64.8 52.533333-117.333333 117.333333-117.333334z m0 64a53.333333 53.333333 0 0 0-53.333333 53.333334v618.666666a53.333333 53.333333 0 0 0 53.333333 53.333334h512a53.333333 53.333333 0 0 0 53.333333-53.333334V202.666667a53.333333 53.333333 0 0 0-53.333333-53.333334H256z m170.666667 618.666667a32 32 0 0 1 0-64h170.666666a32 32 0 0 1 0 64H426.666667z" fill="#8a8a8a" p-id="5584"></path></svg>
                                <p>扫一扫下载</p>
                                <p>"预约挂号"APP</p>
                              </div>
                            </div>
                            <p class="tip">尚医通官方指定平台</p>
                            <p class="tip">快速挂号 安全放心</p>
                          </div>
                        </el-col>
                    </el-row>
                </div>
                <template #footer>
                  <div>
                    <el-button type="primary" @click="userStore.visiable = false;close">关闭窗口</el-button>
                  </div>
                </template>
            </el-dialog>
        </div>
</template>
    
<script setup>
    import userUserStore from '@/store/modules/user'
    import { User,Lock, Minus } from '@element-plus/icons-vue'
    import { ElMessage } from 'element-plus';
    import { ref,computed } from 'vue'

    let userStore = userUserStore()
    let scene =ref(0)
    //收集手机号码
    let loginPhone = ref('')
    let loginCode = ref('')
    let userInfo = ref({phone: loginPhone, code: loginCode})
    let showFlag = ref(false)

    let isTime = ref(false)
    let num = ref(5)

    let form = ref()

    let isPhone = computed(() => {
      const reg = /^0?(13|14|15|17|18|19)[0-9]{9}$/
      return !(reg.test(loginPhone.value))
    })

    const changeScene = () => {
      scene.value = 1
    }

    const getCode = async () => {
      showFlag.value = true
      isTime.value = true
      num.value = 5
      let timer = setInterval(() => {
        num.value -= 1
        if(num.value == 0) {
          clearInterval(timer)
          showFlag.value = false
          isTime.value = false
        }
      }, 1000)
      try {
        await userStore.getCode(loginPhone.value)
        loginCode.value = userStore.code
      } catch (error) {
        
      }
    }

    const login = async () => {
      await form.value.validate()
      try {
        await userStore.userLogin(loginPhone.value,loginCode.value)
        userStore.visiable = false
      } catch (error) {
        ElMessage({
          type: 'error',
          message: error.message
        })
      }
    }

    const validatorPhone = (rule, value, callBack) => {
      const reg = /^0?(13|14|15|17|18|19)[0-9]{9}$/
      if(reg.test(value)){
        callBack()
      }else{
        callBack(new Error('请输入正确的验证码'))
      }
    }

    const validatorCode = (rule, value, callBack) => {
      const reg = /^\d{6}$/
      if(reg.test(value)){
        callBack()
      }else{
        callBack(new Error('请输入正确的验证码'))
      }
    }

    const close = () => {
      form.value.resetFields()
    }

    const rule = {
      phone: [
        { validator: validatorPhone, trigger: 'change' }
      ],
      code: [
        { trigger: 'change', validator: validatorCode }
      ]
    }
</script>
    
<style scoped lang="less">
    .login_register { 
        ::v-deep(.el-dialog__body) {
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
        }

        .content {
          margin-top: 30px;
        }

        .login {
            border: 1px solid #ccc;
            padding: 20px;
            .bottom {
              display: flex;
              flex-direction: column;
              align-items: center;
              p {
                margin: 10px 0;
              }
            }
        }

        .leftContent {
          .top {
            display: flex;
            justify-content: space-around;
            .item {
              display: flex;
              flex-direction: column;
              align-items: center;
              img {
                width: 130px;
                height: 130px;
              }
              p {
                margin: 5px 0;
              }
            }
          }
          .tip {
            text-align: center;
            margin: 20px 0;
            font-size: 20px;
            font-weight: 900;
          }
        }
    }
</style>