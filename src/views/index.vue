<template>

</template>

<script>
    import { value, computed, watch, onMounted } from 'vue'
    import { Component, Vue } from "vue-property-decorator"
    import  Header from '@/components/Header.vue'
    import  Footer from '@/components/Footer.vue'
    export default {
        setup(){
            // reactive state
            const count = value(0)
            // computed state
            const plusOne = computed(() => count.value + 1)
            // method
            const increment = () => { count.value++ }
            // watch
            watch(() => count.value * 2, val => {
                console.log(`count * 2 is ${val}`)
            })
            // lifecycle
            onMounted(() => {
                console.log(`mounted`)
            })
            // expose bindings on render context
            return {
                count,
                plusOne,
                increment
            }
        }
</script>

}