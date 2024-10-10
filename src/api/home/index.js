//统一管理首页模块接口
import request from "@/utils/request";

//获取医院信息
export const requestHospital =  (page, limit) => request.get(`hosp/hospital/${page}/${limit}`)
//获取医院等级信息
export const requestHospitalLevelOrRegion = (dictCode) => request.get(`cmn/dict/findByDictCode/${dictCode}`)
