<template>
    <section id="footer">
        <div class="content-box">
            <div class="footer-logo">
                <router-link to="/home">
                    <img src="@/assets/images/sys-logo.svg" alt="">
                </router-link>
            </div>
            <div class="footer-link">
                <router-link to="">用户协议   | </router-link>
                <router-link to="">关于我们   | </router-link>
                <router-link to="">博彩责任   | </router-link>
                <router-link to="">免责条款   | </router-link>
                <router-link to="">用户隐私   | </router-link>
                <router-link to="">帮助中心   | </router-link>
                <router-link to="">在线客服</router-link>
            </div>
            <div class="footer-icon">
                <img src="@/assets/images/icon/footer-icon1.png" alt="">
                <img src="@/assets/images/icon/footer-icon2.png" alt="">
            </div>
        </div>
    </section>
</template>
<script lang="ts">
    import { Component,Vue } from 'vue-property-decorator'
    @Component({})
    export default class Footer extends Vue{

    }

</script>
<style lang="scss" scoped>
    #footer{
        width: 100%;
        height: 150px;
        background-color: #2a2723;
        display: flex;
        justify-content: center;
        .content-box{
            width: 1200px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .footer-logo{
                width: 200px;
                height: 56px;
            }
            .footer-link{
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