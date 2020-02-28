<template>
    <section class='bg-purple mt-5'>
      <div class="container py-4 bg-white">
        <div class="row justify-content-center">
          <div class="col-md-6 pb-4">            
            <form class="login d-flex flex-column" @submit.prevent="login">
              <h1>Login</h1>
              <div class="form-group">
                <label class='col-form-label'>E-mail</label>
                <input class='form-control' required v-model="user.email" type="email" placeholder="E-mail"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>Password</label>
                <input class='form-control' required v-model="user.password" type="password" placeholder="Password"/>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-2">
                <button class='btn bg-purple text-white border-0 rounded-0 w-50 py-2 ' type="submit">Login</button>
                <router-link to="/signup" class="text-purple">Not registered yet? Sign up.</router-link>
              </div>

              <p v-if="error" class='text-danger pt-2 mb-0'>
                {{ error }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
  export default {
    data() {
      return {
        error: '',
        user:{
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login: function () {
        this.axios
        .post('http://localhost:3001/login',this.user)
        .then(response=>{
          if(response.data){
            this.$session.start()
            this.$session.set('_id', response.data._id)
            this.$session.set('email', response.data.email)
            this.$session.set('name', response.data.name)
            this.$session.set('role', response.data.role)
            this.$router.push("/")
          }
          else{
            this.error = 'E-mail or password incorrect'            
          }
        })
      }
    }
  }
</script>