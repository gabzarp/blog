<template>
  <div class="hello mt-5">
    <section class='bg-purple'>
      <div class="container pt-4 bg-white">
        <div class="row">
          <div v-for="post in posts" class="col-md-12 pb-5" :key="post.id">
            <div>              
              <h3>{{post.title}}</h3>
              <p>{{post.text}}</p>
              <a href="" class='button border-0 px-3 py-2 bg-purple text-white'>Ir para post</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      posts: null
    }
  },
  mounted () {
    this.axios
    .get('http://localhost:3001/posts')
    .then(response => {this.posts = response.data})
    .catch(err=>console.log(err))
  }
}
</script>
