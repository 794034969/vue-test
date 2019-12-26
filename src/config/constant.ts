export const NAV_LIST = [
    {path: '/home', value: '首页'},
    {path: '/live', value: '真人'},
    {path: '/slot', value: '电子'},
    {path: '/lottery', value: '彩票'},
    {path: '/sport', value: '体育'},
    {path: '/chess', value: '棋牌'},
    {path: '/fishing', value: '捕鱼'},
    {path: '/promotion', value: '优惠'},
    {path: '/vip', value: 'VIP'},
    {path: '/about', value: '关于金沙'}
]
export const SWIPER_RESOURCES_CONFIG = {
    mainSwiper: [
        { src: require('@/assets/images/banner/banner01.png'),path:""},  //在动态绑定src时，webpack不识别路径，需要先将图片引入
        { src: require('@/assets/images/banner/banner02.jpg'),path:""},
        { src: require('@/assets/images/banner/banner03.jpg'),path:""},
        { src: require('@/assets/images/banner/banner04.png'),path:""},
        { src: require('@/assets/images/banner/banner05.jpg'),path:""},
        { src: require('@/assets/images/banner/banner06.png'),path:""},
        { src: require('@/assets/images/banner/banner07.jpg'),path:""},
    ],
}
export const HOT_GAME_IMAGES=[
    { src: require("@/assets/images/home/hot-live.png"),path:""},
    { src: require("@/assets/images/home/hot-chess.png") ,path:""},
    { src: require("@/assets/images/home/hot-lottery.png"), path:""},
    { src: require("@/assets/images/home/hot-buyu.png"), path:""},
    { src: require("@/assets/images/home/hot-slot.png"), path:""}
]
