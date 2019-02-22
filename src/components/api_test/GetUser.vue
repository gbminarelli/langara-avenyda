<template>
  <b-container id="get-user" fluid>
    <b-row class="px-5" align-h="center">
      <div class="output-wrapper my-5">
        <button class="mx-4 mb-5 mt-4 pb-2" @click="loadUsers">Get User</button>
        <p>{{ users }}</p>
      </div>
    </b-row>
  </b-container>
</template>

<script>
  const axios = require('axios');
  export default {
    name: 'GetUser',
    data () {
      return {
        users: []
      }
    },
    methods:{
      loadUsers: function() {
        axios
        .get('https://wmdd-get-w5-c90kypf2d.now.sh/api/get')
        .then(response => {
          this.users = response
        })
        .catch(error => {
          console.log(error)
          // this.errored = true
        })
        // .finally(() => this.loading = false)
      }
    }
  }
</script>

<style scoped>
  #get-user {
    background: linear-gradient(#1D3150, #3C6387, #3F5D7E);
  }

  .output-wrapper {
    width: 500px;
    height: auto;
    min-height: 300px;
    background-color: #fff;
    border-radius: 10px;
  }

  .output-wrapper h2 {
    border-bottom: 1px solid #EBEBEB;
  }
</style>
