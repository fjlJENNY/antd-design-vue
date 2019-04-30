import Vue from 'vue'
import App from './App.vue'
import store from '@/stores'
import router from '@/router'
//mport Button from 'ant-design-vue/lib/button'
// import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
