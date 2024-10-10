//统一管理首页模块接口
import request from "@/utils/request";

//获取医院信息
export const requestHospital =  (page, limit, hostype, districtCode) => request.get(`hosp/hospital/${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
//获取医院等级信息
export const requestHospitalLevelOrRegion = (dictCode) => request.get(`cmn/dict/findByDictCode/${dictCode}`)
//根据关键字获取医院的名字
export const requestHospitalName = (hosname) => request.get(`hosp/hospital/findByHosname/${hosname}`)
