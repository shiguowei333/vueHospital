import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/reset.css'

//引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'

//引入vue-router
import router from '@/router'

//引入UI组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入组件中文设置
import zhCn from 'element-plus/es/locale/lang/zh-cn'

//创建根组件实例
const app = createApp(App)

//全局注册组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

//插件配置，路由插件、UI组件库、UI组件中文插件
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(ElementPlus)

//根组件实例绑定页面
app.mount('#app')
