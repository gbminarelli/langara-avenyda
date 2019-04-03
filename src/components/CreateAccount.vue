<template>
  <div id="create-account">
    <b-form class="p-5 text-left">
      <b-form-group id="name-group"
                    label="Your Name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="email-group"
                    label="Email address:"
                    label-for="email"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="email"
                      type="email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="password-group"
                    label="Password:"
                    label-for="password">
        <b-form-input id="password"
                      type="password"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="re-password-group"
                    label="Re-enter password:"
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
      <b-button type="submit" variant="primary">Sign Up</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'CreateAccount',
    data () {
      return {}
    }
  }
</script>

<style scoped>
  #create-account {
    background-color: #eee;
  }
</style>
