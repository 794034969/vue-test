<template>
    <section id="bulletin">
        <el-row>
            <el-col :span="3" style="text-align: right">
                <i class="el-icon-bell"></i>
                <span>最新公告：</span>
            </el-col>
            <el-col :span="18">
                <ul id="bulletinContent" :class="{ 'bulletin-animate': animate===true }">
                    <li v-for="(item,index) in items" :key="index" @click="showDialog(item)">{{ item.text }}</li>
                </ul>
            </el-col>
            <el-col :span="3" style="text-align: right">
                <a href="#">查看更多</a>
            </el-col>
        </el-row>
    </section>
</template>
<script lang="ts">
    import { ref, Ref, toRefs, reactive, computed, watch, onMounted, createComponent } from "@vue/composition-api"

    export default createComponent({
        props: {
            bulletinChangeTime: { type: Number, require: false, default: 3000},     // 公告内容切换等待时间，单位：毫秒
            bulletinItems: { type: Array, require: true, default: () => []} // 公告内容数组
        },
        setup(props: Bulletin.BulletinParams, { root }) {
            const state: any = reactive({
                animate:  false,
                ChangeTime: computed(() => {return props.bulletinChangeTime}),
                items: computed(() => {return props.bulletinItems}),
            })
            function showDialog(path: string) :void {
                root.$router.push(path).catch(() => {console.log()})    // 解决NavigationDuplicated在控制台报错
            }
            function bulletinScroll() :void {
                state.animate=true;    // 消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
                setTimeout(()=>{
                    state.items.push(state.items[0]);  // 将数组的第一个元素添加到数组的
                    state.items.shift();    //删除数组的第一个元素
                    state.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
                }, 1000)
            }
            onMounted(()=>{
                setInterval(bulletinScroll,state.ChangeTime)
            })
            return {
                ...toRefs(state),
                showDialog,
                bulletinScroll
            }
        }
    })
</script>

<style lang="sass" scoped>
    #bulletin
        width: 100%
        height: 50px
        line-height: 50px
        overflow: hidden
        padding: 0 30px
        margin: 0 auto
        border-bottom: 1px solid #eaeaea
        .bulletin-animate
            transition: all 1s
            margin-top: -50px
</style>