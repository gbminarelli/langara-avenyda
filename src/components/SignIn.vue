<template>
  <b-container id="signin" fluid>
    <b-row class="px-5" align-h="end">
      <b-col cols="12" lg="6">
        <b-form class="p-5 my-5 text-left bform">
          <h2 class="mb-4">Sign In</h2>
          <b-form-group id="email-group"
                        label="EMAIL"
                        label-for="email"
                        class="mb-4">
            <b-form-input id="email"
                          type="email"
                          required
                          placeholder="ex.: jason@jatcar.com">
            </b-form-input>
          </b-form-group>
          <b-form-group id="password-group"
                        label="PASSWORD"
                        label-for="password">
            <b-form-input id="password"
                          type="password"
                          required>
            </b-form-input>
            <a href="#"><small>Forgot password?</small></a>
          </b-form-group>
          <b-button type="submit" id="signin-submit-button" class="mt-3">Sign In</b-button>
          <b-form-group id="terms-group">
            <b-form-checkbox-group id="terms">
              <b-form-checkbox value="terms-accepted">Keep me signed in</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <p class="mt-5">New to Avenyda?</p>
          <b-button type="submit" id="create-account-button" @click="goSignUp">Create an account</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'SignIn',
    data () {
      return {}
    },
    methods:{
      goSignUp(){
          this.$router.push({ name: 'SignUp'})
      }
    },
    created: function () {
      this.$emit('toggleNavbar', false);
    },
    destroyed: function () {
      this.$emit('toggleNavbar', true);
    }
  }
</script>

<style scoped>
  /* #signin {
    background-image: url("../assets/automobile-camaro-car-1131575.jpg");
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    filter: blur(5px);
  } */

  #signin:before {
    content: "";
    position: fixed;
    top: -5%;
    left: -5%;
    right: 0;
    bottom: 0;
    z-index: -1;

    display: block;
    background-image: url("../assets/automobile-camaro-car-1131575.jpg");
    background-size:cover;
    /* width: 110%;
    height: 110%; */

    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
  }

  #signin {
    overflow: auto;
    position: relative;
  }

  .bform, a, #create-account-button {
    color: #454F63;
  }

  .bform {
    width: 350px;
    height: auto;
    background-color: #fff;
    border-radius: 10px;
    margin: auto;
  }

  #signin-submit-button {
    width: 100%;
    background-color: #3ACCE1;
    border: none;
  }

  #create-account-button {
    width: 100%;
    background-color: #fff;
    border-color: #3ACCE1;
  }

  p {
    text-align: center;
    border-bottom: 1px solid #EBEBEB;
  }
</style>
