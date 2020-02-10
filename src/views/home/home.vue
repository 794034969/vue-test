<template>
    <section id="home">
        <Carousel :carouselHeight="carouselHeight" :carouselTime="carouselTime" :carouselImages="carouselImages"/>
        <Bulletin :bulletinItems="bulletinItems" style="width: 1200px" />
    </section>
</template>
<script lang="ts">
    import { ref, Ref, toRefs, reactive, computed, watch, onMounted, createComponent } from "@vue/composition-api"
    import { SWIPER_RESOURCES_CONFIG } from "@/config/staticState"
    import Carousel from "@/components/Carousel.vue"
    import Bulletin from "@/components/Bulletin.vue"

    export default createComponent({
        components: {
            Carousel,Bulletin
        },
        setup(props, { root }) {
            const state: any = reactive({
                carouselHeight: "450px",
                carouselTime: 2000,
                carouselImages: SWIPER_RESOURCES_CONFIG,
                bulletinItems: [{ text: "6121" },{ text: "1231" },{ text: "5674" }]
            })
            return {
                ...toRefs(state)
            }
        }
    })
</script>
<style lang="sass" scoped>
    #home
        width: 100%
        height: 100%
</style>