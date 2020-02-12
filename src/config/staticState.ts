export const NAV_LIST = [
    {path: '/home', value: 'Header.value1'},
    {path: '/live', value: 'Header.value2'},
    {path: 'slot', value: 'Header.value3'},
    {path: 'lottery', value: 'Header.value4'},
    {path: 'sport', value: 'Header.value5'},
    {path: 'chess', value: 'Header.value6'},
    {path: 'fishing', value: 'Header.value7'},
    {path: 'promotion', value: 'Header.value8'},
    {path: 'vip', value: 'Header.value9'},
    {path: 'about', value: 'Header.value10'}
]
export const SWIPER_RESOURCES_CONFIG = [
    { src: require('@/assets/images/banner/banner01.png'), path: "/home"},  // 在动态绑定src时，webpack不识别路径，需要先将图片引入
    { src: require('@/assets/images/banner/banner02.jpg'), path: "/live"},
    { src: require('@/assets/images/banner/banner03.jpg'), path: ""},
    { src: require('@/assets/images/banner/banner04.png'), path: ""},
    { src: require('@/assets/images/banner/banner05.jpg'), path: ""},
    { src: require('@/assets/images/banner/banner06.png'), path: ""},
    { src: require('@/assets/images/banner/banner07.jpg'), path: ""},
]
export const LIVE_ENTERTAINMENT_IMAGES = [
    { src: require("@/assets/images/home/banner_01.jpg"), path: ""},
    { src: require("@/assets/images/home/banner_02.jpg"), path: ""},
    { src: require("@/assets/images/home/banner_03.jpg"), path: ""}
]
export const LIVE_LINK_IMAGES = [
    { src: require("@/assets/images/home/yinhe_01.png"), path: ""},
    { src: require("@/assets/images/home/yinhe_02.png"), path: ""},
    { src: require("@/assets/images/home/yinhe_03.png"), path: ""},
    { src: require("@/assets/images/home/yinhe_04.png"), path: ""}
]
