<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <header class='fixed-top shadow'> 
      <div class="accordion" id="accordionMenuOpts">
        <nav class="navbar navbar-expand-lg p-0 border-top">
          <div class="collapse navbar-collapse justify-content-md-center pr-5" id="navbarMenuOpts" data-parent="#accordionMenuOpts">
            <ul class="navbar-nav d-none d-md-flex font-weight-bold">
              <li class="nav-item">
                <router-link to="/" class="nav-link navbar-nav-principal-link text-dark text-uppercase h3">Home</router-link>
              </li>
              <li v-if='user.role == "admin"' class="nav-item">
                <router-link to="/users" class="nav-link navbar-nav-principal-link text-dark text-uppercase h3">Users</router-link>
              </li>
              <li v-if='!user.name' class="nav-item">
                <router-link to="/login" class="nav-link navbar-nav-principal-link text-dark text-uppercase h3">Login</router-link>
              </li>
              <li v-if='user' class="nav-item">
                <router-link :to="'/user/'+user._id" class="nav-link navbar-nav-principal-link text-dark text-uppercase h3">{{user.name}}</router-link>
              </li>
              <li v-if='user.name' class="nav-item">
                <a v-on:click="logout" href='' class="nav-link navbar-nav-principal-link text-dark text-uppercase h3">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      user: {
        _id: this.$session.get('_id'),
        name: this.$session.get('name'),
        role: this.$session.get('role'),
      }
    }
  }, 
  updated () {
    this.user.name = this.$session.get('name')
    this.user.role = this.$session.get('role')
    this.user._id = this.$session.get('_id')
  },
  methods:{
    logout: function () {
      this.$session.destroy()
      this.$router.push('/')
    }
  }
}
</script>

<style>
  section{
    min-height: 887px;
  }
  html{
    background: #946694;
  }
  .bg-purple{
    background: #946694;
  }
  .text-purple{
    color: #946694;      
  }
  a:hover{
    color: #694869 !important;      
  }
</style>
