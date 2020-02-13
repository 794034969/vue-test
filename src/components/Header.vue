<template>
    <header id="header">
        <el-menu :default-active="active" mode="horizontal" active-text-color="#c8a675">
            <el-menu-item v-for="(item,index) in navList" :index="item.path" :key="index" @click="routerLink(item.path)"> {{ $t( item.value ) }}</el-menu-item>
        </el-menu>
        <section>
            <el-dropdown @command="changeLanguages">
                <el-button>{{ $t('Header.changebtn') }}<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :disabled="language==='zh'" command="zh">{{ $t('Header.zh') }}</el-dropdown-item>
                    <el-dropdown-item  :disabled="language==='en'" command="en">{{ $t('Header.en') }}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-badge :value="12" class="item">
                <el-avatar :size="50" src="#"></el-avatar>
            </el-badge>
        </section>
    </header>
</template>
<script lang="ts">
    import { reactive, ref, computed, watch, onMounted, Ref, createComponent, toRefs  } from "@vue/composition-api"
    import { NAV_LIST } from "@/config/staticState"
    import { setLocalCache, getLocalCache } from "@/config/cache"

    export default createComponent({
        setup(props, { root }) {
            const state: any = reactive({
                navList: NAV_LIST,
                active: computed(() => root.$route.path ),
                language: getLocalCache("language")
            })
            function routerLink(path: string): void {
                root.$router.push(path).catch(() => console.log() ) // 解决NavigationDuplicated在控制台报错
            }
            function changeLanguages(language: string): void {
                state.language = language
                root.$i18n.locale = language
                setLocalCache("language", language)
            }
            return {
                ...toRefs(state),
                routerLink,
                changeLanguages
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