<template>
  <div id="home">

    <div class="one">
      <div class="onecont">
        <h1>Park anytime</h1>
        <p class="pr-5">Find a spot whenever you want.</p>
        <b-button class="btn1" variant="primary">FIND PARKING</b-button>
        <b-button class="btn2" variant="outline-primary">LIST YOUR PARKING</b-button>
      </div>
    </div>

    <FindParking/>
    <carousel />
    <img src="../assets/jorge-saavedra-716885-unsplash.jpg"  class="carouselimg" alt="">

    <b-container class="listyourp" fluid>
      <h2 class="my-3">List your parking</h2>
      <p class="mob">Your home is an asset you can share to earn money when you’re away. Now your driveway is too!</p>
      <p class="desk">Have a parking spot available? Let others know.</p>

      <b-row class="lp1">
        <b-col>
          <b-img src="../assets/Icons/time.svg" rounded="circle" width="95" height="95" blank-color="#ddd" alt="img" class="m-1" />
          <div class="lpdata">
            <h3>Easy Listing</h3>
            <p>Apply to list a parking space in minutes</p>
          </div>
        </b-col>
      </b-row>
        <b-row class="lp2">
          <b-col>
            <b-img src="../assets/Icons/manage.svg" rounded="circle" width="95" height="95" blank-color="#ddd" class="m-1" />
            <div class="lpdata">
              <h3>Manage your spot</h3>
              <p>Easily manage rates, availability and other details</p>
            </div>
          </b-col>
        </b-row>
        <b-row class="lp3">
          <b-col>
            <b-img src="../assets/Icons/money.svg" rounded="circle" width="95" height="95" blank-color="#ddd" alt="img" class="m-1" />
            <div class="lpdata">
              <h3>Earn extra money</h3>
              <p>Earn extra money without extra work</p>
            </div>
          </b-col>
        </b-row>
      <br>
      <div class="btn3d mob">
        <b-button class="btn3" variant="outline-primary">LIST YOUR PARKING</b-button>
      </div>
      <div class="btn3d desk">
        <b-button class="btn3" variant="primary">LIST YOUR PARKING</b-button>
      </div>
    </b-container>
    <reviewHome/>
  </div>
</template>

<script>
  import CreateAccount from '@/components/CreateAccount'
  import Carousel from '@/components/Carousel'
  import FindParking from "@/components/FindParking"
  import reviewHome from "@/components/reviewHome"
  

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
      FindParking,
      reviewHome
    }
  }
</script>

<style scoped>
  .carouselimg{
    height: 500px;
    float: right;
    object-fit: cover;
    width: 100vw;
  }
  .one {
    font-family: acumin-pro, sans-serif;
    height: 87vh;
    background-image: url("../assets/jacly.jpg");
    background-size: cover;
    background-position: center;
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

  .desk {
    display: none;
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





  /* Desktop View Media Screen */
  /* Temporary width 500px */

<<<<<<< HEAD
  @media (min-width: 600px) {
=======
  @media (min-width: 768px) {
>>>>>>> bcd96303fb718956b51cb5464f63247384fdb00c

    .carouselimg{
      width: 50vw;
    }
      .listyourp {
    height: 100vh;
  }
    .one {
      background-image: url("../assets/adult-beach.jpg");
      height: 87vh;
      object-fit: cover;
    }

    .one h1 {
      margin-left: 139px;
      color: #1D3150;
      font-weight: bold;
    }

    .one p {
      margin-left: 139px;
      color: #1D3150;
    }

    .onecont {
      padding-top: 80px;
    }

    .btn1 {
      position: static;
      margin-left: 139px;
      background-color: #03E3FC;
      border: 0;
    }

    .btn2 {
      position: static;
      margin-left: 139px;
      margin-top: 10px;
      border-color: #03E3FC;
    }

    .mob { 
      /* displays on mobile view */
      display: none;
    }

    .desk {
      /* displays on desktop view */
      display: inline;
    }


    /* List Your Parking Section Starts Here... */
    .listyourp {
      display: grid;
      grid-template-rows:  63px 1fr 1fr 2fr 2fr 2fr 2fr 3fr;
      /* grid-template-rows:  63px 58px 83px 105px 105px 126px 47px 163px; */
      grid-template-columns: 139px 1fr;
      background-image: url("../assets/asphalt.jpg");
<<<<<<< HEAD
      background-size:cover;
=======
      background-size: cover;
      background-position: center;
>>>>>>> bcd96303fb718956b51cb5464f63247384fdb00c
      object-fit: cover;
      color: white;
    }

    .listyourp h2 {
      grid-column: 2/3;
      grid-row: 2/3;
      text-align: left;
      font-size: 60px;
    }

    .listyourp p {
      grid-column: 2/3;
      grid-row: 3/4;
    }

    .listyourp img {
      float: left;
    }

    .listyourp h3, .listyourp p {
      text-align: left;
    }

    .lp1 {
      grid-column: 2/3;
      grid-row: 4/5;
    }

    .lp2 {
      grid-column: 2/3;
      grid-row: 5/6;
    }

    .lp3 {
      grid-column: 2/3;
      grid-row: 6/7;
    }

    .btn3d {
      grid-column: 2/3;
      grid-row: 7/8;
    }

    .btn3 {
      position: absolute;
      left: 160px;

    }
    

  }



</style>
