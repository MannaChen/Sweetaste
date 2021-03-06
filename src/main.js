import Vue from 'vue'
import router from './router'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')