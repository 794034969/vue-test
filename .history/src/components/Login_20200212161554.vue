<template>
    <section>
        <p>adadasda54d45a4sd5</p>
    </section>
</template>
<script lang="ts">
    import { reactive, ref, computed, watch, onMounted, Ref, createComponent, toRefs  } from "@vue/composition-api"

    // TS需要使用 createComponent 来定义组件，才能类型推断
    export default createComponent({

        setup(props, context) {
            // const isShow: Ref<boolean> = ref(props.isDialog)
            // reactive() 函数接收一个普通对象，返回一个响应式的数据对象
            const state: any = reactive({

            });

            return {
                // 直接返回 state 那么数据会是非响应式的， MV 单向绑定
                // toRefs 包装后返回 state 那么数据会是响应式的， MVVM 双向绑定
                // ...toRefs(state),
            }
        }
    })
</script>
<style scoped lang="sass">

</style>