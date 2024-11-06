import { defineStore } from "pinia"
import { requestSMS } from "@/api/hospital"

const useUserStore = defineStore('User', {
    state: () => {
      return {
        visiable: false, //用于控制登录框的显示/隐藏
        code: ''
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
      }
    },
    getters: {
  
    }
  })
  
  export default useUserStore