<template>
    <section class='bg-purple mt-5'>
      <div class="container py-4 bg-white">
        <div class="row justify-content-center">
          <div class="col-md-6 pb-4">            
            <form class="login d-flex flex-column" @submit.prevent="edit">
              <h1>Edit post</h1>
              <div class="form-group">
                <label class='col-form-label'>Title</label>
                <input class='form-control' required v-model="post.title" type="title" placeholder="Title"/>
              </div>
              <div class="form-group">
                <label class='col-form-label'>Text</label>
                <textarea class='form-control' required v-model="post.text" type="text" placeholder="Text"/>
              </div>
              <button class='btn bg-purple text-white border-0 rounded-0 w-50 py-2 mt-2' type="submit">Update post</button>
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
        post:null
      }
    },
    mounted(){
      this.axios
        .get('http://localhost:3001/post/' + this.$route.params.id)
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
        .put('http://localhost:3001/post/'+this.post._id,{'text': this.post.text, 'title': this.post.title})
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