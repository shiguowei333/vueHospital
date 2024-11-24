//统一管理首页模块接口
import request from "@/utils/request";

//获取医院详情信息
export const requestHospitalInfo =  (hoscode) => request.get(`hosp/hospital/${hoscode}`)
//获取医院科室信息
export const requestHospitalDeparment = (hoscode) => request.get(`hosp/hospital/department/${hoscode}`)
//获取手机验证码
export const requestSMS = (phone) => request.get(`/sms/send/${phone}`)
//用户登录接口
export const requestLogin = (data) => request.post(`/user/login`,data)
//科室挂号信息接口
export const requestHospitalWork = (number, limit, hoscode, depcode) => request.post(`/hosp/hospital/auth/getBookingScheduleRule/${number}/${limit}/${hoscode}/${depcode}`)