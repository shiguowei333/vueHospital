import { defineStore } from "pinia"

const useUserStore = defineStore('User', {
    state: () => {
      return {
        visiable: false //用于控制登录框的显示/隐藏
      }
    },
    actions: {
      
    },
    getters: {
  
    }
  })
  
  export default useUserStore