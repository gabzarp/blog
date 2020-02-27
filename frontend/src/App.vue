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
              <li class="nav-item">
                <router-link to="/users" class="nav-link navbar-nav-principal-link text-dark text-uppercase h3">Users</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link navbar-nav-principal-link text-dark text-uppercase h3">Login</router-link>
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
