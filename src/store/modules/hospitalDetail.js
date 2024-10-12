import { defineStore } from "pinia"
import { requestHospitalInfo } from "@/api/hospital"

const useDetailStore = defineStore('Detail', {
  state: () => {
    return {
      hospitalInfo: {}
    }
  },
  actions: {
    async getHospital(hoscode) {
      let result = await requestHospitalInfo(hoscode)
      if(result.code === 200) {
        this.hospitalInfo = result.data
      }
    }
  },
  getters: {

  }
})

export default useDetailStore