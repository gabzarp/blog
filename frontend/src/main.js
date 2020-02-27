import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import VueSession from 'vue-session'

Vue.use(VueSession)
Vue.use(VueRouter)

Vue.prototype.axios = axios

import Home from './components/Home.vue'
import Login from './components/Login.vue'

Vue.config.productionTip = false
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
]
const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
