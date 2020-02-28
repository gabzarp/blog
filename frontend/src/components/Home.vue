<template>
  <div class="hello mt-5">
    <section class='bg-purple'>
      <div class="container pt-4 bg-white">
        <div v-if='user._id ' class="row">
          <div class="col-12 mb-2">
            <router-link to='/create_post' class='btn border-0 rounded-0 px-3 py-2 bg-purple text-white'>Create post</router-link>
          </div>
        </div>
        <div class="row">
          <div class="col-12 form-group">
            <input v-model='searchText' type="text" v-on:keyup="search" class="form-control" placeholder="Search">
          </div>
        </div>
        <div class="row">
          <div v-for="post in posts" class="col-12 pb-5" :key="post.id">
            <div>              
              <h3>{{post.title}}</h3>
              <p>{{post.text.substring(0,150)}}</p>
                <div class="col-10 d-flex justify-content-between">
                  <p>Date: {{post.date}}</p>
                  <p>Author: {{post.user.name}}</p>
                </div>
              <div class='d-flex justify-content-between'>
                <router-link :to="'/post/' + post._id" class='button border-0 px-3 py-2 bg-purple text-white'>View</router-link>
                <div v-if='(post.user._id == user._id && user._id) || user.role == "admin"' class='d-flex'>
                  <router-link :to="'/edit_post/' + post._id" class='button border-0 px-3 py-2 bg-info text-white mr-2'>Edit</router-link>
                  <a v-on:click="deletePost(post._id)" href="" class='button border-0 px-3 py-2 bg-danger text-white'>Delete</a>
                </div>
              </div>
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
      posts: null,
      user:{
        _id:'',
        role:''
      },
      searchText:''
    }
  },
  mounted () {
    this.user._id = this.$session.get('_id')
    this.user.role = this.$session.get('role')
    this.axios
    .get('http://localhost:3001/posts')
    .then(response => {this.posts = response.data})
    .catch(err=>console.log(err))
  },
  methods: {
    search: function () {
      if(this.searchText.length>0){
        this.axios
        .get('http://localhost:3001/search_post/'+this.searchText)
        .then(response => {this.posts = response.data})
        .catch(err=>console.log(err))
      }else{
        this.axios
        .get('http://localhost:3001/posts')
        .then(response => {this.posts = response.data})
        .catch(err=>console.log(err))
      }
    },
    deletePost: function (_id){
      this.axios
      .delete('http://localhost:3001/post/' + _id)
      .catch(err=>console.log(err))
    }
  }
}
</script>
