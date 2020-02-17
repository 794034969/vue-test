<template>
    <section id="footer">
        <div class="content-box">
            <div class="footer-logo">
                <router-link to="/home">
                    <img src="@/assets/images/sys-logo.svg" alt="">
                </router-link>
            </div>
            <div class="footer-link">
                <router-link to=""> {{$t('Footer.link1')}}   | </router-link>
                <router-link to="">{{$t('Footer.link2')}}   | </router-link>
                <router-link to="">{{$t('Footer.link3')}}   | </router-link>
                <router-link to="">{{$t('Footer.link4')}}   | </router-link>
                <router-link to="">{{$t('Footer.link5')}}   | </router-link>
                <router-link to="">{{$t('Footer.link6')}}   | </router-link>
                <router-link to="">{{$t('Footer.link7')}}</router-link>
            </div>
            <div class="footer-icon">
                <img src="@/assets/images/icon/footer-icon1.png" alt="">
                <img src="@/assets/images/icon/footer-icon2.png" alt="">
            </div>
        </div>
    </section>
</template>
<script lang="ts">
    import { ref, Ref, toRefs, reactive, computed, watch, onMounted, createComponent } from "@vue/composition-api";

    export default createComponent({ // TS需要使用 createComponent 来定义组件，才能类型推断

    })
</script>
<style lang="scss" scoped>
    #footer {
        width: 100%;
        height: 150px;
        background-color: #2a2723;
        display: flex;
        justify-content: center;
        .content-box {
            width: 1200px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .footer-logo {
                width: 200px;
                height: 56px;
            }
            .footer-link {
                width: 600px;
                display: flex;
                justify-content: space-around;
                 a {
                    color: #ac956d;
                    outline: none;
                    text-decoration: none;
                 }
                    
            }
        }
    }
</style>