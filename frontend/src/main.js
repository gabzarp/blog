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
import Signup from './components/Signup.vue'
import Profile from './components/Profile.vue'
import Users from './components/Users.vue'
import PostEdit from './components/PostEdit.vue'
import PostCreate from './components/PostCreate.vue'
import Post from './components/Post.vue'

Vue.config.productionTip = false
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/user/:id', component: Profile },
  { path: '/users', component: Users },
  { path: '/post/:id', component: Post },
  { path: '/edit_post/:id', component: PostEdit },
  { path: '/create_post', component: PostCreate },
]
const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
