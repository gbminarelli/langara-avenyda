<template>
   <b-navbar toggleable="lg" type="light" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-nav-item @click="goHome" class="logo-nav-a">
    <img src="../assets/Logo/logo-white.svg" alt=""  class="logo-nav">
    </b-nav-item>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">HOW IT WORKS</b-nav-item>
      <b-nav-item href="#">FIND PARKING</b-nav-item>
      <b-nav-item href="#">LIST YOUR PARKING</b-nav-item>
      <b-nav-item href="#" @click="goFaqs">FAQ</b-nav-item>

    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
        <!-- <div>
        <p>Email</p>
        <b-form-input v-model="text1"
                  type="text"
                  placeholder="eg.eduardo.landa@outlook.com"></b-form-input>
        </div>

        <div>
        <p>Password</p>
        <b-form-input v-model="text2"
                  type="text"
                  placeholder="●●●●●●●●●"></b-form-input>
        </div> -->

        <div class="SignAlign">
        <b-button @click="goSignIn" class="signIN">Sign in</b-button>

        <!-- <b-form-checkbox id="checkbox1"
                     v-model="status"
                     value="accepted"
                     unchecked-value="not_accepted">
      Remember me
    </b-form-checkbox> -->
        </div>
        <div>
            <b-button @click="goSignUp" class="signUP">Sign up</b-button>
        </div>



    </b-navbar-nav>

  </b-collapse>
</b-navbar>

<!-- navbar-1.vue -->
</template>

<script>
export default {
    name:'Navbar',
    data(){
        return{
            companyName:'Avenyda',
            text1: '',
            text2: '',
            status: 'not_accepted'
        }
    },
    methods:{
        goHome(){
            this.$router.push({ name: 'Home'})
        },
        goFaqs(){
            this.$router.push({ name: 'Faqs'})
        },
        goProfile(){
            this.$router.push({ name: 'Profile'})
        },
        goSignIn(){
            this.$router.push({ name: 'SignIn'})
        },
        goSignUp(){
            this.$router.push({ name: 'SignUp'})
        }
    }
}
</script>

<style>
@import url("https://use.typekit.net/pwq4ktd.css");
#app{
    margin-top:0;
    padding-top: 0;
}
.navbar-toggler{
    color: white !important;
    border-color: white !important;
    background-color: white;
    margin-left: 10px;}

.signUP{
    background: transparent !important;
}
.signIN{
    background: transparent !important;
    border: none;
}
.signIN,.signUP{
    margin-left: 5px;
    margin-right: 5px;
}
.navbar,.nav-link{
    color: white !important;
    background: #1D3150 !important;
}
.bg-info{
    background: #1D3150 !important;
}
.navbar-light .navbar-nav .nav-link{
    color: white;
}
.nav-pills {
    color: black;
}

.ml-auto p{
    margin: 0;
    text-align: start;
}
.bv-example-row{
      text-align: center;
  }
@media (min-width: 768px){
.logo-nav-a{
    width: 25%;
    list-style: none;
}
}
@media (max-width: 768px){
nav{
    padding: 0 !important;
}
.logo-nav-a{
    list-style: none;
    width: 40vw;
    margin: 0;
}
.nav-link{
    padding: 0;
}
.navbar-expand-lg{
    text-align: center;
}
.ml-auto{
display:grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto auto;
grid-column-gap: 0;
width: 60vw;
margin: 0 auto;
padding-bottom: 10px;
}

.navbar {
    height: 13%;
}

}
</style>
