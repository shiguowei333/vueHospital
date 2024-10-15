import { defineStore } from "pinia"
import { requestHospitalInfo,requestHospitalDeparment } from "@/api/hospital"

const useDetailStore = defineStore('Detail', {
  state: () => {
    return {
      hospitalInfo: {},
      hospitalDeparment: []
    }
  },
  actions: {
    async getHospital(hoscode) {
      let result = await requestHospitalInfo(hoscode)
      if(result.code === 200) {
        this.hospitalInfo = result.data
      }
    },
    async getDeparment(hoscode) {
      let result = await requestHospitalDeparment(hoscode)
      if(result.code === 200) {
        this.hospitalDeparment = result.data
      }
    }
  },
  getters: {

  }
})

export default useDetailStore