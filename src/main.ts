import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.sass' // 样式重置

// vue3 Composition-Api 在2.0体验
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

// Element UI
import Element from 'element-ui'
import './assets/styles/element-variables.scss'
Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
