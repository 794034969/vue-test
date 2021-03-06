import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './staticRouter' // 只能命名为routes
// 页面加载进度条
import NProgress from 'nprogress'  // NProgress.set(0.4) 跳转进度
import 'nprogress/nprogress.css';     // NProgress.inc()  固定跳转长度
// 配置NProgress选项
// NProgress.configure({ })

Vue.use(VueRouter)

const router: any = new VueRouter({
  // base: process.env.BASE_URL,
  routes
} as any)

// 登陆页面路由 name
const LOGIN_PAGE_NAME = 'login'

// 跳转之前
router.beforeEach((to: any, from: any, next: any) => {
  NProgress.start()
  next()
})

// 跳转之后
router.afterEach((to: any) => {
  NProgress.done()
})

export default router
