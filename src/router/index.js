import { createRouter,createWebHistory } from "vue-router"

export default createRouter({
  //路由模式配置
  history: createWebHistory(),
  //管理路由
  routes: [
    {
      path: '/home',//医院首页路由组件
      component: () => import('@/pages/home/index.vue')
    },
    {
      path: '/hospital',//医院管理路由组件
      component: () => import('@/pages/hospital/index.vue')
    },
    {
      path: '/',//首页重定向
      redirect: '/home'
    }
  ]
})