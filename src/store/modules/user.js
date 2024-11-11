import { defineStore } from "pinia"
import { requestSMS,requestLogin } from "@/api/hospital"

const useUserStore = defineStore('User', {
    state: () => {
      return {
        visiable: false, //用于控制登录框的显示/隐藏
        code: '',
        userInfo: JSON.parse(localStorage.getItem('USERINFO')) || {}
      }
    },
    actions: {
      async getCode(phone) {
        let result = await requestSMS(phone)
        if(result.code == 200) {
          this.code = result.data
          return 'ok'
        }else {
          return Promise.reject(new Error(result.message))
        }
      },
      async userLogin(phone,code) {
        let result = await requestLogin({phone,code})
        if(result.code == 200) {
          this.userInfo = result.data
          localStorage.setItem('USERINFO',JSON.stringify(this.userInfo))
          return 'ok'
        }else{
          return Promise.reject(new Error(result.message))
        }
      },
      logout() {
        this.userInfo = {}
      }
    },
    getters: {
  
    }
  })
  
  export default useUserStore