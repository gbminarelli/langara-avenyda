<template>
  <b-container id="signup" fluid>
    <b-row class="px-5" align-h="center">
      <b-col sm="8"></b-col>
      <b-form class="p-5 my-5 text-left bform">
        <h2 class="mb-4">Sign Up</h2>
        <b-form-group id="name-group"
                      label="NAME"
                      label-for="name">
          <b-form-input id="name"
                        type="text"
                        required
                        placeholder="eg: Jaison Justus">
          </b-form-input>
        </b-form-group>
        <b-form-group id="email-group"
                      label="EMAIL"
                      label-for="email">
          <b-form-input id="email"
                        type="email"
                        required
                        placeholder="eg: yourname@gmail.com">
          </b-form-input>
        </b-form-group>
        <b-form-group id="password-group"
                      label="PASSWORD"
                      label-for="password">
          <b-form-input id="password"
                        type="password"
                        required>
          </b-form-input>
        </b-form-group>
        <b-form-group id="re-password-group"
                      label="*RE-TYPE PASSWORD"
                      label-for="re-password">
          <b-form-input id="re-password"
                        type="password"
                        required>
          </b-form-input>
        </b-form-group>
        <b-form-group id="terms-group">
          <b-form-checkbox-group id="terms">
            <b-form-checkbox value="terms-accepted">I agree to the Terms of Use and Privacy Policy.</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button type="submit" id="signup-submit-button" class="mt-3" @click="goVerification">Sign Up</b-button>
        <small>Already have an account?
          <a href="#" @click="goSignIn">Sign in</a></small>
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'SignUp',
    data () {
      return {}
    },
    methods:{
      goVerification(){
          this.$router.push({ name: 'Verification'})
      },
      goSignIn(){
          this.$router.push({ name: 'SignIn'})
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
  #signup {
    background-image: url("../assets/automobile-car-fine-looking-1588073.jpg");
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
  }

  .bform, a {
    color: #454F63;
  }

  .bform {
    width: 350px;
    height: auto;
    background-color: #fff;
    border-radius: 10px;
  }

  #signup-submit-button {
    width: 100%;
    background-color: #3ACCE1;
    border: none;
  }
</style>
