//统一管理首页模块接口
import request from "@/utils/request";

//获取医院详情信息
export const requestHospitalInfo =  (hoscode) => request.get(`hosp/hospital/${hoscode}`)