import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/styles/reset.scss' // 样式重置
Vue.config.productionTip = false
// vue3 Composition-Api 在2.0体验
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

// Element UI
import Element from 'element-ui'
import '@/assets/styles/element-variables.scss'
Vue.use(Element, {i18n: (key: string, value: string) => i18n.t(key, value)})

// I18n国际化
import i18n from '@/config/languages'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
