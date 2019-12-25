<template>
    <div id="home">
        <el-carousel :interval="2000" :type="typeSwiper" :height="bannerHeight + 'px'"> <!-- 当幻灯片小于4张时去掉type切换为普通模式 -->
            <el-carousel-item v-for="(item,index) in imagesSwiper" :key="index">
                <img alt="" :src="item.src" class="img-banner"/>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script lang="ts">
    import { Component,Provide,Vue} from 'vue-property-decorator'
    import { SWIPER_RESOURCES_CONFIG } from '@/config/constant'
    @Component
    export default class Home extends Vue{
        //data函数
        @Provide() typeSwiper: string = "card" // swiper类型  // 在template有使用要提前指定值
        @Provide() bannerHeight: number = 0 // 图片父容器高度
        @Provide() screenWidth!: number // 浏览器宽度
        @Provide() imagesSwiper: any[] = SWIPER_RESOURCES_CONFIG.mainSwiper// 浏览器宽度
        // 生命周期函数
        private created() {
            if(this.imagesSwiper.length<=3){
                this.typeSwiper=""
            }
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
        height: 100%;

    }
</style>