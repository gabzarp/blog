<template>
    <section class='bg-purple mt-5'>
      <div class="container py-4 bg-white">
        <div class="row justify-content-center">
          <div class="col-md-6 pb-4">            
            <form class="login d-flex flex-column" @submit.prevent="update">
              <h1>Profile</h1>
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
              <div class="form-group">
                <label class='col-form-label'>Role</label>
                <select v-model="user.role" class="form-control">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
              </div>
              <button class='btn bg-purple text-white border-0 rounded-0 w-50 py-2 mt-2' type="submit">Update profile</button>
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
  name: 'Update',
    data() {
      return {
        error: '',
        user:{
            id: this.$route.params.id,
            email: '',
            password: '',
            name: '',
            role: ''
        }
      }
    },
    methods: {
      update: function () {
        this.axios
        .put('http://localhost:3001/user', this.user)
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