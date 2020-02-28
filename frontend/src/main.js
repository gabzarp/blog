import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import VueSession from 'vue-session'

Vue.use(VueSession)
Vue.use(VueRouter)

Vue.prototype.axios = axios

import Posts from './components/post/Posts.vue'
import Login from './components/user/Login.vue'
import Signup from './components/user/Signup.vue'
import Profile from './components/user/Profile.vue'
import Users from './components/user/Users.vue'
import PostEdit from './components/post/PostEdit.vue'
import PostCreate from './components/post/PostCreate.vue'
import Post from './components/post/Post.vue'

Vue.config.productionTip = false
const routes = [
  { path: '/', component: Posts },
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
