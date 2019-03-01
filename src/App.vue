<template>
  <div id="app">
    <Navbar v-if="showNavbar"/>
    <Navbar2 v-else/>
    <router-view @toggleNavbar="toggleNavbar"/>
    <Footer/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data: function () {
    return {
      showNavbar: true
    }
  },
  methods: {
    toggleNavbar: function(value) {
      // this.showNavbar = value;
    }
  }
}
</script>

<style>
  #app {
    font-family: acumin-pro, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #1D3150;
    margin-top: 60px;
  }
</style>
