<template>
    <section class='bg-purple mt-5'>
      <div class="container pt-4 bg-white">
        <div class="row">
          <div class="col-md-12 pb-4">            
            <form class="login d-flex flex-column" @submit.prevent="login">
              <h1>Login</h1>
              <div class="form-group">
                <label class='col-form-label'>E-mail</label>
                <input class='form-control' required v-model="email" type="email" placeholder="E-mail"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>Password</label>
                <input class='form-control' required v-model="password" type="password" placeholder="Password"/>
              </div>
              <button class='btn bg-purple text-white border-0 rounded-0 w-50 py-2 mt-2' type="submit">Login</button>
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
  name: 'Login',
    props: {
      msg: String
    },
    data() {
      return {
        error: '',
        email: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        this.axios
        .post('http://localhost:3001/login',{
          'email':this.email, 
          'password': this.password
        })
        .then(response=>{
          if(response.data){
            this.$session.start()
            this.$session.set('email', this.email)
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