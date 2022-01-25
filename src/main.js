import Vue from 'vue'
import Tap from 'vue-mobile-tap'
import '@/plugins/vuetify'
import App from '@/components/App'
import router from '@/router'
import store from '@/store/index.js';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "@/registerServiceWorker";
Vue.use(Tap)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

