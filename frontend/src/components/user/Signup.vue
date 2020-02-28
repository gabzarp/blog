<template>
    <section class='bg-purple mt-5'>
      <div class="container py-4 bg-white">
        <div class="row justify-content-center">
          <div class="col-md-6 pb-4">            
            <form class="login d-flex flex-column" @submit.prevent="signup">
              <h1>Sign up</h1>
              <div class="form-group">
                <label class='col-form-label'>E-mail</label>
                <input class='form-control' required v-model="user.email" type="email" placeholder="E-mail"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>Name</label>
                <input class='form-control' required v-model="user.Name" type="Name" placeholder="Name"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>Password</label>
                <input class='form-control' required v-model="user.password" type="password" placeholder="Password"/>
              </div>
              <button class='btn bg-purple text-white border-0 rounded-0 w-50 py-2 mt-2' type="submit">Sign up</button>
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
          password: '',
          name: '',
          role: 'user'
        }
      }
    },
    methods: {
      signup: function () {
        this.axios
        .post('http://localhost:3001/user',this.user)
        .then(()=>{
          this.$router.push("/")
        })
        .catch(err=>{
          this.error = err
        })
      }
    }
  }
</script>