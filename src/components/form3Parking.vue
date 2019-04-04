<template>
  <b-container fluid class="py-2 text-center">
    <h1>Congratulations!</h1>
    <p>Your parking spot is ready for you!</p>
    <small class="mt-5">Reservation Code</small>
    <p class="font-weight-bold mb-4">1012KK7</p>
    <b-img rounded="circle" fluid src="../assets/host-placeholder_cropped.jpg" alt="host" class="host-img" />
    <p class="mb-0 mt-4">Eduardo is your host</p>
    <a href="#"><small>Contact host</small></a>
    <p class="mb-0 mt-3">12345 - 100th King Boulevard. Coquitlam, BC.</p>
    <a href="#"><small>Get directions</small></a>
    <b-form @submit="onSubmit">
      <b-row class="text-left mt-4 mb-1">
        <b-col>
          <small>Start Parking</small>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="8">
          <b-form-input type="date" v-model="datetime.start.date" />
        </b-col>
        <b-col cols="4" class="pl-0">
          <b-form-input type="time" v-model="datetime.start.time" />
        </b-col>
      </b-row>
      <b-row class="text-left mt-2 mb-1">
        <b-col>
          <small>End Parking</small>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col cols="8">
          <b-form-input type="date" v-model="datetime.end.date" />
        </b-col>
        <b-col cols="4" class="pl-0">
          <b-form-input type="time" v-model="datetime.end.time" />
        </b-col>
      </b-row>
      <b-row class="mb-3 mt-4">
        <b-col cols="auto">
          <b-button block type="submit" variant="outline-primary">Change Booking</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
  export default {

name:"form3Parking",
    data() {
      return {

      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        // alert(JSON.stringify(this.form));
      }
    },
    props: ['datetime']
  }
</script>

<style scoped>
.congratsIMG{
    width: 8vw;
}
.user{
    width: 5vw;
    height: 5vw;
     margin-left: 1rem;
}
.alignleft{
  text-align:left;
  margin: 0;
}
.btnBt{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.topText{
  font-size: 1rem;
  margin: 0 !important;
}
h1{
  font-size: 1.5rem;
}
h2{
  font-size: 1.3rem;
}
.underlineAddress{
  text-decoration: underline;
}
.hostColor{
  color: #00E5FF;
}

@media (min-width: 900px) {
   .formWidth{
 width: 30vw;}
}
  img.img-fluid {
    /* Some CSS is overwritting the images' height when we use the component on the home page */
    height: auto !important;
  }

  .host-img {
    max-width: 200px;
  }

</style>
