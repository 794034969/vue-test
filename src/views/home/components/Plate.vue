<template>
    <section id="plate">
        <el-card class="box-card">
            <div slot="header" class="plate-title clear-float">
                <div class="plate-title-head">
                    <div class="icon-title"></div>
                    <span class="title-text-main">{{ name }}</span>
                    <span class="title-text-minor">{{ depict }}</span>
                </div>
              <div class="plate-title-content">
                  <el-link href="#">查看更多    <i class="el-icon-circle-plus"></i></el-link>
              </div>
            </div>
            <div class="plate-content clear-float">
                <Carousel :carouselHeight="carouselHeight" :carouselTime="carouselTime" :carouselImages="carouselImages" class="plate-content-left"/>
                <div class="plate-content-right">
                    <img v-for="(item,index) in plateImages" :key="index" :src="item.src" alt="">
                </div>
            </div>
        </el-card>
    </section>
</template>
<script lang="ts">
    import { ref, Ref, toRefs, reactive, computed, watch, onMounted, createComponent } from "@vue/composition-api"
    import Carousel from "@/components/Carousel.vue"
    import { LIVE_ENTERTAINMENT_IMAGES, LIVE_LINK_IMAGES } from "@/config/staticState";

    export default createComponent({
        components: {
            Carousel
        },
        props: {
            titleName: { type: String, require: true, default: ""},     // 公告标题
            titleDepict: { type: String, require: true, default: ""},     // 公告标题
        },
        setup(props, { root }) {
            const state: any = reactive({
                name: props.titleName,
                depict: props.titleDepict,
                carouselHeight: "450px",
                carouselTime: 2000,
                carouselImages: LIVE_ENTERTAINMENT_IMAGES,
                plateImages: LIVE_LINK_IMAGES
            })
            return {
                ...toRefs(state)
            }
        }
    })
</script>
<style lang="sass" scoped>
    #plate
        width: 100%
        .plate-title
            width: 100%
            height: 30px
            .plate-title-head
                height: 30px
                line-height: 30px
                float: left
                .icon-title
                    display: inline-block
                    width: 4px
                    height: 18px
                    background: #c8a675
                    margin-right: 10px
                .title-text-main
                    font-size: 22px
                    margin-right: 10px
                .title-text-minor
                    font-size: 16px
            .plate-title-content
                float: right
        .plate-content
            .plate-content-left
                width: 610px
                float: left
            .plate-content-right
                float: right
                width: 590px
                img
                    width: 290px
                    height: 220px
                    margin: 0 0 5px 5px

</style>