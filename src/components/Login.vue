<template>
    <section>
            <el-dialog title="提示" :visible.sync="isShow" width="30%" center :close-on-click-modal="false" :close-on-press-escape="false">
<!--                <el-form :model="loginForm" ref="loginValidateForm" label-width="100px" class="demo-ruleForm">-->
<!--                    <el-form-item label="账号" prop="username">-->
<!--                        <el-input type="age" v-model.number="loginForm.username" autocomplete="off"></el-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="密码" prop="password">-->
<!--                        <el-input type="age" v-model.number="loginForm.password" autocomplete="off"></el-input>-->
<!--                    </el-form-item>-->
<!--                </el-form>-->
                <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
              </span>
        </el-dialog>
    </section>
</template>
<script lang="ts">
    import { reactive, ref, computed, watch, onMounted, Ref, createComponent, toRefs  } from "@vue/composition-api"; //TS需要使用 createComponent 来定义组件，才能类型推断
    interface Props {
        propsObject: object,
        isDialog: boolean
    }
    export default createComponent({
        props: {
            propsObject:{},
            isDialog: { //是否显示
                type: Boolean,
                default: false
            }
        },
        setup(props: Props, context){
            // console.log(props,"props")
            // console.log(context,"context")
            const isShow: Ref<boolean> = ref(props.isDialog)

            // const loginFrom: Ref<object> = ref({username:"",password:""})
            // reactive() 函数接收一个普通对象，返回一个响应式的数据对象
            const state: any = reactive({
                searchValue: "",
                isShow: props.isDialog,
                isShowComputed: computed({get:() =>props.isDialog,set:value => state.isShow=value}),
                loginForm:{
                    username:"",
                    password:""
                }
            });
            onMounted(() => {
                console.log(isShow,"isShow")
            })
            function cancel(): void {
                context.emit('close-dialogStatus', false)
                console.log("cancel")
            }
            function confirm(): void {
                // context.emit('close-dialogStatus', false)
                // console.log(state.loginForm)
            }
            return {
                // 直接返回 state 那么数据会是非响应式的， MV 单向绑定
                // toRefs 包装后返回 state 那么数据会是响应式的， MVVM 双向绑定
                // ...toRefs(state),
                isShow,
                cancel,
                confirm,
                onMounted
            }

        }
    })
</script>
<style scoped lang="scss">

</style>