<template>
    <section id="home">
        <el-carousel :interval="2000" :type="typeSwiper" :height="bannerHeight + 'px'"> <!-- 当幻灯片小于4张时去掉type切换为普通模式 -->
            <el-carousel-item v-for="(item,index) in imagesSwiper" :key="index">
                <router-link :to="item.path">
                    <img alt="" :src="item.src"/>
                </router-link>
            </el-carousel-item>
        </el-carousel>
        <section class="home-content">
            <div class="hot-game-box">
                <div class="content-title"><span></span>热门游戏</div>
                <div class="hot-game">
                    <router-link v-for="(item,index) in imagesHot" :key="index" :to="item.path">
                        <img :src="item.src" alt="">
                    </router-link>
                </div>
            </div>
            <div class="recent-game-box">
                <div class="content-title"><span></span>最近玩过的游戏</div>
                <div class="recent-game">
                    <router-link  v-for="(item,index) in playedGameList" :key="index" :to="item.path">
                        <img alt="" :src="item.src"/>
                    </router-link>
                </div>
            </div>
            <div class="hot-game-box">
                <div class="content-title"><span></span>热门游戏</div>
                <div class="hot-game">
                    <router-link v-for="(item,index) in imagesHot" :key="index" :to="item.path">
                        <img :src="item.src" alt="">
                    </router-link>
                </div>
            </div>
        </section>
    </section>
</template>
<script lang="ts">
    import { Component,Provide,Vue} from 'vue-property-decorator'
    import { SWIPER_RESOURCES_CONFIG,HOT_GAME_IMAGES } from '@/config/staticState'
    import Carousel from "@/components/Carousel.vue";
    @Component
    export default class Home extends Vue{
        //data函数
        @Provide() typeSwiper: string = "card" // swiper类型  // 在template有使用要提前指定值
        @Provide() bannerHeight: number = 0 // 图片父容器高度
        @Provide() screenWidth!: number // 浏览器宽度
        @Provide() imagesSwiper: any[] = SWIPER_RESOURCES_CONFIG.mainSwiper//
        @Provide() imagesHot: any[] = HOT_GAME_IMAGES//
        @Provide() playedGameList!: any[] //最近玩过的游戏
        // 生命周期函数
        private created() {
            if(this.imagesSwiper.length<=3){
                this.typeSwiper=""
            }
            this.playedGameList = [
                {
                    src: require("@/assets/images/home/recently-ky-chess.png"),
                    gameName: "开元棋牌",
                    path:""
                },
                {
                    src: require("@/assets/images/home/recently-buyu.png"),
                    gameName: "捕鱼",
                    path:""
                },
                {
                    src: require("@/assets/images/home/recently-ig-lottery.png"),
                    gameName: "IG棋牌",
                    path:""
                },
                {
                    src: require("@/assets/images/home/recently-ag-live.png"),
                    gameName: "AG真人",
                    path:""
                },
                {
                    src: require("@/assets/images/home/recently-pt-slot.png"),
                    gameName: "PT电子",
                    path:""
                }
            ]
        }
        private mounted() {
            // 首次加载时,需要调用一次
            this.screenWidth =  window.innerWidth;
            this.setBannerSize();
            // 窗口大小发生改变时,调用一次
            window.onresize = () => {
                this.screenWidth = window.innerWidth;
                this.setBannerSize();
            }
        }
        // methods方法
        private setBannerSize() :void {
            this.bannerHeight = 450 / 1920 * this.screenWidth;
        }
    }
</script>
<style scoped lang="scss">
    #home{
        width: 100%;
        .home-content{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .hot-game-box{
                width: 1200px;
                .content-title{
                    width: 1200px;
                    height: 40px;
                    line-height: 40px;
                    padding-left: 46px;
                    font-size: 20px;
                    border-bottom: 2px solid #936329;
                    position: relative;
                    span{
                        display: block;
                        width: 36px;
                        height: 36px;
                        background: url("~@/assets/images/icon/hot-game-icon.png") no-repeat 0 0;
                        position: absolute;
                        top: 6px;
                        left: 4px;
                    }
                }
                .hot-game{
                    width: 1200px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    & img:hover{
                        transform: scale(1.1);
                        transition: all .2s;
                    }
                }
            }
            .recent-game-box{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                .content-title{
                    width: 1200px;
                    height: 40px;
                    line-height: 40px;
                    padding-left: 46px;
                    font-size: 20px;
                    border-bottom: 2px solid #936329;
                    position: relative;
                    span{
                        display: block;
                        width: 36px;
                        height: 36px;
                        background: url("~@/assets/images/icon/hot-game-icon.png") no-repeat 0 0;
                        position: absolute;
                        top: 6px;
                        left: 4px;
                    }
                }
                .recent-game{
                    width: 1200px;
                    padding: 40px 0;
                    background-color: #f6f1e7;
                    display: flex;
                    justify-content: space-around;
                }
            }
        }
    }
</style>