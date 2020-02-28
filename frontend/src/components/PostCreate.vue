<template>
    <section class='bg-purple mt-5'>
      <div class="container py-4 bg-white">
        <div class="row justify-content-center">
          <div class="col-md-6 pb-4">            
            <form class="login d-flex flex-column" @submit.prevent="create">
              <h1>Create post</h1>
              <div class="form-group">
                <label class='col-form-label'>Title</label>
                <input class='form-control' required v-model="post.title" type="title" placeholder="Title"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>Text</label>
                <textarea class='form-control' required v-model="post.text" type="text" placeholder="Text"/>
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
  name: 'Post create',
    data() {
      return {
        error: '',
        post:{
          title: '',
          text: '',
          user: {
            _id :'',
            name:''
          }
        }
      }
    },
    mounted(){
        this.post.user._id = this.$session.get('_id')
        this.post.user.name = this.$session.get('name')
    },
    methods: {
      create: function () {
        this.axios
        .post('http://localhost:3001/post',this.post)
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