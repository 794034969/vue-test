<template>
    <header id="header">
        <el-row class="header-row">
            <el-col :span="6" class="header-logo">
                <img src="@/assets/images/sys-logo.png" alt="">
            </el-col>
            <el-col :span="12">
               <nav class="header-nav">
                   <ul><li v-for="(item,index) in navList" :key="index" @click="toPath(item.path)">{{ item.value }}</li></ul>
               </nav>
            </el-col>
            <el-col :span="6" class="header-btn">
                <el-button>注册</el-button>
                <el-button>登录</el-button>
                <el-button>试玩</el-button>
            </el-col>
        </el-row>
    </header>
</template>
<script lang="ts"> //首先要注意，这里的lang要改成ts才能支持ts写法，文件还是.vue文件
    import { Component,Provide,Emit,Watch,Prop,Model,Inject,Vue } from 'vue-property-decorator'
    import { NAV_LIST } from '@/config/constant'
    @Component //Component组件装饰器，用于增加一些全局的配置，如filters过滤器等，类前面必须加上
    export default class Header extends Vue{
        //这里写钩子函数，监听器，data，methods，计算属性等
        //可以在使用typescript的一些类的private public readonly get set等
        @Provide() private navList: object[] = NAV_LIST;//定制属性，替换data,以后正常情况下直接这样使用，当然用data也是可以的，但是不推荐

        private toPath(path: string): void{ //methods的写法就变成了一个简单的类的方法
            if(this.$route.path==path) return //若路径相同（重复点击），vue会有错误提示
            this.$router.push({
                path:path
            })
        }

        //Emit 给父组件传值、触发父组件事件
        // @Emit("closeDialog",'触发事件传递给父组件的字符串')
        // private onClickEmitTwo():void{
        //     console.log('运行完毕这个方法，触发Emit');
        // }
        //监听route（路由）的变化触发这个方法
        //Watch 监听属性
        // @Watch('$route') private handleRouteChange(to:any):void{
        //     this.initBreadCrumbItems(to);
        // }
        // Prop 接收父组件传递的数据()里面定义接收的类型
        // @Prop(Object) private Data!: any;//!表示这个值必须传，不然报错，强制性...
        //Model (组件之间)接收父组件双向数据绑定的数据,暂不做介绍

        //Inject注入 正常情况下使用Provide
        // @Ref() public readonly loginForm!: Form;//创建一个Ref,然后这个属性注入到element-ui的Form节点上 ()内的参数是可以自选,也可以不传

        //计算属性,通过get来设置监听事件的变化
        // public get count2 (){
        //     return this.count * 2;//当count发生变化的时候，count2也发生变化
        // }
    }
</script>
<style lang="scss" scoped>
    #header{
        .header-row{
            width: 100%;
            height:80px;
            .header-logo{
                text-align: right;
                line-height: 80px;
                img{
                    vertical-align: middle
                }
            }
            .header-nav{
                height: 80px;
                li{
                    width: 80px;
                    height: 80px;
                    float: left;
                    line-height: 80px;
                    text-align: center;
                }
            }
            .header-btn{
                height: 80px;
                line-height: 80px;
            }
        }
    }
</style>