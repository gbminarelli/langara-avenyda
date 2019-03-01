<template>
  <b-container id="verification" fluid>
    <b-row class="px-5" align-h="center">
      <div class="p-5 my-5 verification-wrapper">
        <img src="../assets/Logo/logo.svg" alt=""  class="logo-nav">
        <h2 class="my-4">You're almost there!</h2>
        <div class="my-5">
          <img src="../assets/Icons/verification email.svg" alt=""  class="logo-nav">
        </div>
        <p class="mb-5">Before we get started, please confirm your email address.</p>
        <a href="#">Resend confirmation email</a>
      </div>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'Verification',
    data () {
      return {}
    },
    methods:{
      goVerification(){
          this.$router.push({ name: 'Verification'})
      }
    }
  }
</script>

<style scoped>
  /* #verification {
    background-image: url("../assets/automobile-car-fine-looking-1588073.jpg");
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
  } */

  #verification:before {
    content: "";
    position: fixed;
    top: -5%;
    left: -5%;
    right: 0;
    bottom: 0;
    z-index: -1;

    display: block;
    background-image: url("../assets/automobile-car-fine-looking-1588073.jpg");
    background-size:cover;
    /* width: 110%;
    height: 110%; */

    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
  }

  #verification {
    overflow: auto;
    position: relative;
  }

  .verification-wrapper, a {
    color: #454F63;
  }

  .verification-wrapper {
    width: 400px;
    height: auto;
    background-color: #fff;
    border-radius: 10px;
  }
</style>
