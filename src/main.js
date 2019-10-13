import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from '@/router'
import axios  from "@/http/index";
import i18n from '@/i18n/index';
import global from '@/utils/global'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/iconfont/iconfont.css'

Vue.use(ElementUI);
Vue.use(axios)

Vue.prototype.global = global
// Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App),
})

