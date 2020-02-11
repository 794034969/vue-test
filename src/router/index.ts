import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './staticRouter' // 只能命名为routes
// 页面加载进度条
import NProgress from 'nprogress'  // NProgress.set(0.4) 跳转进度
import 'nprogress/nprogress.css';     // NProgress.inc()  固定跳转长度

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "hash",
  routes
})

// 登陆页面路由 name
const LOGIN_PAGE_NAME = 'login'

// 跳转之前
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// 跳转之后
router.afterEach(to => {
  NProgress.done()
})

export default router
