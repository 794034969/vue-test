<template>
    <section id="carousel">
        <el-carousel :interval="time" :height="height">
            <el-carousel-item v-for="(item,index) in imagesArray" :key="index" @click="routerLink(item.path)">
                <el-image :src="item.src"></el-image>
            </el-carousel-item>
        </el-carousel>
    </section>
</template>
<script lang="ts">
    import { ref, Ref, toRefs, reactive, computed, watch, onMounted, createComponent } from "@vue/composition-api"

    export default createComponent({
        props: {
            carouselBanner: { type: Boolean, required: false, default: false },  // 是否是banner图
            carouselHeight: { type: String, required: true, default: "450px" },  // 走马灯高度
            carouselTime: { type: Number, required: false, default: 2000 },  // 走马灯切换时间，单位：毫秒
            carouselImages: { type: Array, required: true, default: () => [] }   // 走马灯图片，需要path和src属性
        },
        setup(props: Carousel.PropsParams, { root }) {
            const state: any = reactive({
                // 避免直接更改prop，当父组件重新渲染时，该值都会被覆盖。 使用基于属性值的数据或计算属性
                isBanner: computed(() => props.carouselBanner ),
                height:  props.carouselHeight,
                heightComputed: computed({get: () => props.carouselHeight, set: value => state.height = value}),
                time: computed(() => props.carouselTime ),
                imagesArray: computed(() => props.carouselImages )
            })
            function routerLink(path: string): void {
                root.$router.push(path).catch(() => console.log() )    // 解决NavigationDuplicated在控制台报错
            }
            function initSize(): void {
                let currentDom: any = window.document.getElementById('carousel')
                let scrollWidth: number = 0
                if (currentDom !== null) { scrollWidth = currentDom.offsetWidth }
                state.heightComputed = `${450 / 1920 * scrollWidth}px`
            }
            onMounted(() => {
                if (state.isBanner) { initSize() }
                window.onresize = () => { initSize() }
            })
            return {
                ...toRefs(state),
                routerLink
            }
        }
    })
</script>
<style lang="scss" scoped>
    #carousel {
        width: 100%;
        height: 100%;
    }
</style>