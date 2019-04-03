<template>
  <!-- TODO: make it responsive (mobile view) -->
  <div id="footer">
    <b-container class="sticky-bottom text-light pt-5 pb-3 px-5" fluid>
      <b-row>
        <b-col class="mb-5 text-left" cols="12" lg="3">
          <b-img class="logo" src="../assets/Logo/logo-white_noPadding.svg" alt="Avenyda logo" />
        </b-col>
        <b-col class="text-left mb-5 pl-lg-5" cols="6" lg="3">
          <h2 class="mb-3">PARKING</h2>
          <ul>
            <li>How it works</li>
            <li>Find parking</li>
            <li>List your space</li>
            <li>FAQ</li>
          </ul>
        </b-col>
        <!-- <b-col cols="4" lg="0"></b-col> -->
        <b-col class="text-left mb-5 pl-lg-5" cols="6" lg="3">
          <h2 class="mb-3">AVENYDA</h2>
          <ul>
            <li>About us</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
            <li>Refound Policy</li>
            <!-- <li>Contact</li> -->
          </ul>
        </b-col>
        <b-col class="text-left pl-lg-5" lg="3">
          <h2 class="mb-4">SEARCH</h2>
          <b-input-group class="">
            <b-form-input type="text" />
            <!-- <b-input-group-append> -->
              <!-- TODO: Fix this. -->
              <!-- <img src="../assets/Icons/Artwork 14.svg" id="search-icon" alt="search icon"> -->
            <!-- </b-input-group-append> -->
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="social-icons py-4 text-right text-lg-left mt-5 mt-lg-0" align-h="start">
        <!-- <font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x mr-2" />
        <font-awesome-icon :icon="['fab', 'instagram']" class="fa-2x mr-2" />
        <font-awesome-icon :icon="['far', 'envelope']" class="fa-2x" /> -->
        <b-col>
          <b-img src="../assets/Icons/Linkeding.svg" alt="Linkedin icon" />
          <b-img src="../assets/Icons/Facebook.svg" class="ml-4" alt="Facebook icon" />
          <b-img src="../assets/Icons/Instagran.svg" class="mx-4" alt="Instagram icon" />
          <b-img src="../assets/Icons/Email.svg" alt="Email icon" />
        </b-col>
      </b-row>
      <b-row class="address-footnote py-2">
        <b-col>
          <p>Address: 1234-4321 100th Avenue. Surrey, BC. Canada.</p>
          <small>&copy; 2019 Avenyda. All rights reserved.</small>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name:'Footer',
    data(){
      return{
        companyName:'Avenyda'
      }
    }
  }
</script>

<style scoped>
  #footer {
    background: linear-gradient(#1D3150, #3F5D7E, #3C6387);
  }

  h2 {
    font-size: 1.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    line-height: 1.7;
  }

  .logo {
    width: 200px;
    /* width: 100%; */
    height: auto;
  }

  .address-footnote {
    text-align: right;
    border-top: 1px solid #454F63;
    color: #C8C8C8;
  }

  .address-footnote p {
    margin-bottom: 0;
    color: #EBEBEB;
  }
  /* Testing "lg" breakpoint: */
  /* @media (max-width: 992px){
    #footer {
      background: linear-gradient(#FFF, #3F5D7E, #3C6387);
    }
  } */
</style>
