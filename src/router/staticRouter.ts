/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export  default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/index',
        name: 'index',
        // 路由懒加载，webpackChunkName打包为一个js文件，否则会按单个组件生产js
        component: () => import(/* webpackChunkName: "index" */ '@/views/index.vue'),
        meta: {icon: '', keepAlive: false, title: 'index'},
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import(/* webpackChunkName: "index" */ '@/views/home/home.vue'),
                meta: {icon: '', keepAlive: false, title: 'home'}
            },
            {
                path: '/live',
                name: 'live',
                component: () => import(/* webpackChunkName: "index" */ '@/views/live/live.vue'),
                meta: {icon: '', keepAlive: false, title: 'live'}
            }
        ]
    },

]