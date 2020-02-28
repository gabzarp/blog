<template>
  <div class="hello mt-5">
    <section class='bg-purple'>
      <div class="container pt-4 bg-white">
        <div class="row justify-content-center">
            <table class="col-10">
                <tr class="border-bottom">
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Role</th>
                    <th></th>
                </tr>
                <tr v-for="user in users" class="col-md-12 pb-5 border-bottom" :key="user.id">
                    <th>{{user.name}}</th>
                    <th>{{user.email}}</th>
                    <th>{{user.role}}</th>
                    <th class="d-flex justify-content-center">
                        <router-link :to="'/user/'+user._id"  class='button border-0 bg-info text-dark px-2 py-1'>Edit</router-link>
                    </th>
                </tr>
            </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.axios
    .get('http://localhost:3001/users')
    .then(response => {this.users = response.data})
    .catch(err=>console.log(err))
  }
}
</script>
