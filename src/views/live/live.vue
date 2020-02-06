<template>
    <section id="live">
<!--        <img :src="banner" alt="">-->
        <Carousel :carouselHeight="carouselHeight" :carouselTime="carouselTime"  :carouselType="carouselType"  :carouselImages="carouselImages"/>
        <section style="width: 1280px;margin: 0 auto;padding: 20px 0;" class="clear-float">
            <el-card class="box-card">
                <div class="clear-float">
                    <el-image :src="live1"></el-image>
                    <div style="float: left;width: 270px;height: 230px;padding-left: 20px;">
                        <p style="font-weight: 700;font-size: 14px;">SA真人</p>
                        <p style="color: #c8a675;margin-top: 40px;">贵族式的博弈体验</p>
                        <p style="font-size: 14px;color: #666; line-height: 20px;margin-top: 40px;height: 70px;">优于普通会员至高无上的尊贵体验和优势,丰厚优惠独擅其享,贵族式博弈体验。</p>
                        <el-button>进入游戏</el-button>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card" style="float: right;">
                <div class="clear-float">
                    <el-image :src="live2"></el-image>
                    <div style="float: left;width: 270px;height: 230px;padding-left: 20px;">
                        <p style="font-weight: 700;font-size: 14px;">BG真人</p>
                        <p style="color: #c8a675;margin-top: 40px;">顶尖技术 实力最强</p>
                        <p style="font-size: 14px;color: #666; line-height: 20px;margin-top: 40px;height: 70px;">在内核相同、源代码开放的条件下,问题最少的,就是实力最强的。</p>
                        <el-button>进入游戏</el-button>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card">
                <div class="clear-float">
                    <el-image :src="live1"></el-image>
                    <div style="float: left;width: 270px;height: 230px;padding-left: 20px;">
                        <p style="font-weight: 700;font-size: 14px;">SA真人</p>
                        <p style="color: #c8a675;margin-top: 40px;">贵族式的博弈体验</p>
                        <p style="font-size: 14px;color: #666; line-height: 20px;margin-top: 40px;height: 70px;">优于普通会员至高无上的尊贵体验和优势,丰厚优惠独擅其享,贵族式博弈体验。</p>
                        <el-button>进入游戏</el-button>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card" style="float: right;">
                <div class="clear-float">
                    <el-image :src="live2"></el-image>
                    <div style="float: left;width: 270px;height: 230px;padding-left: 20px;">
                        <p style="font-weight: 700;font-size: 14px;">BG真人</p>
                        <p style="color: #c8a675;margin-top: 40px;">顶尖技术 实力最强</p>
                        <p style="font-size: 14px;color: #666; line-height: 20px;margin-top: 40px;height: 70px;">在内核相同、源代码开放的条件下,问题最少的,就是实力最强的。</p>
                        <el-button>进入游戏</el-button>
                    </div>
                </div>
            </el-card>
        </section>
    </section>
</template>
<script lang="ts">
    import { reactive, ref, computed, watch, onMounted, Ref, createComponent, toRefs  } from "@vue/composition-api"

    export default createComponent({
        components: {
            Carousel
        },
        setup(props, { root }) {
            const state: any = reactive({
                banner: require("@/assets/images/banner/banner07.jpg"),
                live1: require("@/assets/images/live/live-1.jpg"),
                live2: require("@/assets/images/live/live-2.jpg"),
                carouselHeight: "450px",
                carouselTime: 2000,
                carouselType: "",
                carouselImages: SWIPER_RESOURCES_CONFIG
            })
            return {
                ...toRefs(state)
            }
        }
    })
</script>
<style lang="sass" scoped>
    #live
        width: 100%
        height: 100%
        .box-card
            width: 632px
            height: 270px
            margin: 10px 0
            float: left
            .el-image
                width: 320px
                height: 230px
                float: left
</style>