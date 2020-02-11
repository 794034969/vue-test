<template>
    <section>
        <Header/>
        <router-view/>
        <Footer/>
    </section>
</template>

<script lang="ts">
    import { ref, Ref, toRefs, reactive, computed, watch, onMounted, createComponent } from "@vue/composition-api";
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'

    export default createComponent({ // TS需要使用 createComponent 来定义组件，才能类型推断
        components: {
            Header, Footer
        }
    })
</script>