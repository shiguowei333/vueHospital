//统一管理首页模块接口
import request from "@/utils/request";


export const requestHospital =  (page, limit) => request.get(`hosp/hospital/${page}/${limit}`)