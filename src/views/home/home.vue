<template>
    <section id="home">
        <Carousel :carouselBanner="true" :carouselHeight="carouselHeight" :carouselTime="carouselTime" :carouselImages="carouselImages"/>
        <Bulletin :bulletinItems="bulletinItems" style="width: 1200px" />
        <section class="home-content">
            <Plate titleName="真人娱乐" titleDepict="汇聚全球顶级真人娱乐平台"/>
            <Plate titleName="精选大促" titleDepict="各种优惠为您撑腰" style="margin: 40px 0"/>
            <el-card class="box-card" style="margin-bottom: 40px">
                <div slot="header" class="plate-title">
                    <div class="plate-title-head">
                        <div class="icon-title"></div>
                        <span class="title-text-main">关于银河游戏</span>
                    </div>
                </div>
                <div class="plate-content clear-float">
                    <div class="plate-content-left">
                        <p style="font-size: 24px;color: #6b471b;">银河游戏游戏委员会推荐</p>
                        <p style="margin-top: 40px">「银河游戏」是世界级亚洲特色的五星级综合渡假城. 第一期于2011年5月15日正式开业，投资额达165亿港元，渡假城内提供超过2,200间客房及套房。 第二期于2015年5月27日，「银河游戏」「澳门百老汇™」的开幕，将原来版图双倍扩展至超过110万平方米，总投资额超过430亿港元，并进一步向集团的1,000亿港元投资承诺迈进。
                            银河游戏全资线上责任游戏，持澳门合法线上责任游戏牌照，受银河游戏监察协调局监督。</p>
                    </div>
                    <div class="plate-content-right">
                        <img src="@/assets/images/home/yinhe_05.jpg" alt="">
                    </div>
                </div>
            </el-card>
        </section>
    </section>
</template>
<script lang="ts">
    import { ref, Ref, toRefs, reactive, computed, watch, onMounted, createComponent } from "@vue/composition-api"
    import { SWIPER_RESOURCES_CONFIG } from "@/config/staticState"
    import Carousel from "@/components/Carousel.vue"
    import Bulletin from "@/components/Bulletin.vue"
    import Plate from "@/views/home/components/Plate.vue"

    export default createComponent({
        components: {
            Carousel, Bulletin, Plate
        },
        setup(props, { root }) {
            const state: any = reactive({
                carouselHeight: "450px",
                carouselTime: 2000,
                carouselImages: SWIPER_RESOURCES_CONFIG,
                bulletinItems: [{ text: "6121" }, { text: "1231" }, { text: "5674" }]
            })
            return {
                ...toRefs(state)
            }
        }
    })
</script>
<style lang="scss" scoped>
    #home {
        width: 100%;
        height: 100%;
        .home-content {
            width: 1242px;
            margin: 0 auto;
            .plate-title {
                width: 100%;
                height: 30px;
                .plate-title-head {
                    height: 30px;
                    line-height: 30px;
                    float: left;
                    .icon-title {
                        display: inline-block;
                        width: 4px;
                        height: 18px;
                        background: #c8a675;
                        margin-right: 10px;
                    }
                    .title-text-main {
                        font-size: 22px;
                        margin-right: 10px;
                    }
                    .title-text-minor {
                        font-size: 16px;
                    }
                }
                .plate-title-content{
                    float: right;
                }
            }
            .plate-content {
                .plate-content-left {
                    width: 800px;
                    float: left;
                    padding: 20px;
                }
                .plate-content-right {
                    float: right;
                    width: 400px;
                }
            }
        }
    }
</style>