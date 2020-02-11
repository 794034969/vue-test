<template>
    <header id="header">
        <el-menu :default-active="active" mode="horizontal" active-text-color="#c8a675">
            <el-menu-item v-for="(item,index) in navList" :index="item.path" :key="index" @click="routerLink(item.path)">{{ item.value }}</el-menu-item>
        </el-menu>
    </header>
</template>
<script lang="ts">
    import { reactive, ref, computed, watch, onMounted, Ref, createComponent, toRefs  } from "@vue/composition-api"
    import { NAV_LIST } from "@/config/staticState"
    export default createComponent({
        setup(props, { root }) {
            const state: any = reactive({
                navList: NAV_LIST,
                active: computed(() => root.$route.path)
            })
            function routerLink(path: string): void {
                root.$router.push(path).catch(() => console.log() ) // 解决NavigationDuplicated在控制台报错
            }
            return {
                ...toRefs(state),
                routerLink
            }
        }
    })
</script>
<style lang="sass" scoped>
    #header
        width: 100%
        height: 80px
        display: flex
        justify-content: center
</style>