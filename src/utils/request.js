// 对于axios函数库进行二次封装
import axios from "axios"

const request = axios.create({
  baseURL: '/api',
  // 超时时间设置
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  return config
})

// 相应拦截器
request.interceptors.response.use((resp) => {
  return resp.data
}, (error) => {
  return Promise.reject(new Error(error.msg))
})

export default request