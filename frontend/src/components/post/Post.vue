<template>
    <section class='bg-purple mt-5'>
      <div class="container py-4 bg-white">
        <div class="row justify-content-center">
          <div class="col-md-10 pb-4">            
              <h1>{{post.title}}</h1>
              <p>{{post.text}}</p>
          </div>
        </div>
        <div class="row justify-content-center" >
          <div class="col-10 d-flex justify-content-between">
            <p>Date: {{post.date}}</p>
            <p>Author: {{post.user.name}}</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-10">
            <router-link to="/"  class='button border-0 px-3 py-2 bg-info text-white mr-2'>Back</router-link>
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
        post:{
          _id: this.$route.params.id,
          title: '',
          text: '',
          user: {
            _id: '',
            name: '',
          }
        }
      }
    },
    mounted(){
      this.axios
        .get('http://localhost:3001/post/' + this.post._id)
        .then((response)=>{
          this.post = response.data
        })
        .catch(err=>{
          this.error = err
        })
    },
    methods: {
      edit: function () {
        this.axios
        .put('http://localhost:3001/post',this.post)
        .then(()=>{
          this.$router.push("/post/"+this.post._id)
        })
        .catch(err=>{
          this.error = err
        })
      }
    }
  }
</script>