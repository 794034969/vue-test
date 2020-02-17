<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
    @import "~@/assets/styles/element-reset.scss";
    
    #app {
        width: 100%;
        height: 100%;
        img[lazy="loading"] {
          width: 100px;
          height: 20px;
        }
    }
</style>
