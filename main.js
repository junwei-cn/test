import App from './App.vue'
import loading from '@/pages/loading/loading.js'
import * as Pinia from 'pinia'

const host = 'https://unidemo.dcloud.net.cn/';

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$host = host;
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  const pina = Pinia.createPinia()
  app.use(pina)
  app.use(loading)
  return {
    app
  }
}
// #endif