<template>
    <section class='bg-purple mt-5'>
      <div class="container pt-4 bg-white">
        <div class="row">
          <div class="col-md-12 pb-4">            
            <form class="login d-flex flex-column" @submit.prevent="signup">
              <h1>Sign up</h1>
              <div class="form-group">
                <label class='col-form-label'>E-mail</label>
                <input class='form-control' required v-model="email" type="email" placeholder="E-mail"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>Name</label>
                <input class='form-control' required v-model="Name" type="Name" placeholder="Name"/>
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
  name: 'Sign up',
    data() {
      return {
        error: '',
        email: '',
        password: '',
        name: '',
      }
    },
    methods: {
      login: function () {
        this.axios
        .post('http://localhost:3001/user',{
          'email':this.email, 
          'password': this.password,
          'name': this.name
        })
        .then(response=>{
          router.go('/')
        })
      }
    }
  }
</script>