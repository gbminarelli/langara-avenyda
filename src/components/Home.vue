<template>
  <div id="home">

    <div class="one">
      <h1>Parking's new best friend</h1>
      <p class="pr-5">Find convenient and affordable parking listed by locals</p>
      <b-button class="btn1" variant="primary">FIND PARKING</b-button>
      <b-button class="btn2" variant="outline-primary">LIST YOUR PARKING</b-button>
    </div>


    <b-container class="listyourp" fluid>
      <h2 class="m-3">List your parking</h2>
      <p class="m-3">Your home is an asset you can share to earn money when you’re away. Now your driveway is too!</p>
      <b-row>
        <b-col>
          <b-img src="../assets/Icons/time.svg" rounded="circle" width="95" height="95" blank-color="#ddd" alt="img" class="m-1" />
          <div>
            <h3>Easy Listing</h3>
            <p>Apply to list a parking space in minutes</p>
          </div>
        </b-col>
      </b-row>
        <b-row>
          <b-col>
            <b-img src="../assets/Icons/manage.svg" rounded="circle" width="95" height="95" blank-color="#ddd" class="m-1" />
            <div>
              <h3>Manage your spot</h3>
              <p>Easily manage rates, availability and other details</p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-img src="../assets/Icons/money.svg" rounded="circle" width="95" height="95" blank-color="#ddd" alt="img" class="m-1" />
            <div>
              <h3>Earn extra money</h3>
              <p>Earn extra money without extra work</p>
            </div>
          </b-col>
        </b-row>
      <br>
      <b-button class="btn3" variant="outline-primary">LIST YOUR PARKING</b-button>
    </b-container>


  </div>
</template>

<script>
  import CreateAccount from '@/components/CreateAccount'
  import Carousel from '@/components/Carousel'
  import GoogleMap from "@/components/GoogleMap"

  export default {
    name: 'Home',
    data () {
      return {
        companyName:'Avenyda'
      }
    },
    components: {
      CreateAccount,
      Carousel,
      GoogleMap
    }
  }
</script>

<style scoped>

  .one {
    font-family: acumin-pro, sans-serif;
    height: 768px;
    background-image: url("../assets/jacly.jpg");
    background-size: cover;
    margin: auto;
    color: white;
    padding: 16px;
  }

  .one h1 {
    text-align: left;
    font-size: 50px;
  }

  .one p {
    text-align: left;
    font-size: 20px;
  }

  .one button {
    display: block;

  }

  .btn1 {
    position: absolute;
    left: 16px;
    bottom: 17vh;
  }

  .btn2 {
    position: absolute;
    left: 16px;
    bottom: 11vh;
  }

  .listyourp {
    height: 100vh;
  }



</style>
