<template>
    <section id="carousel">
        <el-carousel :interval="time" :type="type" :height="height">
            <el-carousel-item v-for="(item,index) in imagesArray" :key="index" @click="routerLink(item.path)">
                <img alt="" :src="item.src"/>
            </el-carousel-item>
        </el-carousel>
    </section>
</template>
<script lang="ts">
    import { ref, Ref, toRefs, reactive, computed, watch, onMounted, createComponent } from "@vue/composition-api"

    interface Props {
        carouselHeight: string,
        carouselTime: number,
        carouselType: string,
        carouselImages: Array<object>
    }

    export default createComponent({
        props: {
            carouselHeight: { type: String, required: true, default: "450px" },  // 走马灯切换时间，单位：毫秒
            carouselTime: { type: Number, required: true, default: 2000 },  // 走马灯切换时间，单位：毫秒
            carouselType: { type: String, required: true, default: "" },    //走马灯类型，1.空值：基础，2.card：卡片风格
            carouselImages: { type: Array, required: true, default: ()=> [] }   // 走马灯图片，需要path和src属性
        },
        setup(props: Props, { root }) {
            const state: any = reactive({
                //避免直接更改prop，当父组件重新渲染时，该值都会被覆盖。 使用基于属性值的数据或计算属性
                height:  computed(() => {return props.carouselHeight}),  // 图片父容器高度
                time: computed(() => {return props.carouselTime}),
                type: computed(() => {return props.carouselType}),
                imagesArray: computed(() => {return props.carouselImages}),
            })
            function routerLink(path: string) :void {
                root.$router.push(path).catch(() => {console.log()})    // 解决NavigationDuplicated在控制台报错
            }
            // function setBannerSize() :void {
            //
            // }
            // onMounted(() => {
                // console.log(state.params)
                // if(state.imagesArray.length<=3) state.imagesArray=""    // 当图片小于三张无法使用card模式
                // 窗口大小发生改变时,调用一次
                // window.onresize = () => {
                //     state.screenWidth = window.innerWidth;
                //     state.bannerHeight = `${450 / 1920 * state.screenWidth}px`;
                // }
            // })
            return {
                ...toRefs(state),
                routerLink
            }
        }
    })
</script>
<style lang="sass" scoped>
    #carousel
        width: 100%
        height: 100%
</style>