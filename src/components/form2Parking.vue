<template>
  <b-container fluid class="py-2 text-left">
    <h1>{{name}}'s Spot</h1>
    <b-row>
      <b-col cols="2"><b-badge variant="light">Driveway</b-badge></b-col>
      <b-col cols="10"><p>{{address}}</p></b-col>
    </b-row>
    <b-row>
      <b-col>{{description}}</b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col>⭐⭐⭐★★</b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-img  fluid src="../assets/parkin1.jpeg" alt="Image 1" />
      </b-col>
      <b-col>
        <b-img  fluid src="../assets/asphalt.jpg" alt="Image 2" />
      </b-col>
      <b-col>
        <b-img  fluid src="../assets/tyler-rutherford-1130939-unsplash.jpg" alt="Image 3" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="contactHost my-3">Contact Host</b-col>
    </b-row>
    <b-row class="backgroundCard mx-0 py-2">
      <b-container fluid>
        <h2>Parking features</h2>
        <b-row class="mb-2">
          <b-col cols="auto">
            <p>Light</p>
          </b-col>
          <b-col cols="auto">
            <p>Camera</p>
          </b-col>
        </b-row>
        <h2>Parking Instructions</h2>
        <b-row>
          <b-col>{{parkingInstructions}}</b-col>
        </b-row>
      </b-container>
    </b-row>
    <b-form @submit="onSubmit">
      <b-row class="my-2">
        <b-col cols="8">
          <b-row>
            <b-col class="mt-3 mb-1">
              <small>Start Parking</small>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="7">
              <b-form-input v-model="form.datetime.start.date" type="date"/>
            </b-col>
            <b-col cols="5" class="pl-0">
              <b-form-input v-model="form.datetime.start.time" type="time"/>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="mt-3 mb-1">
              <small>End Parking</small>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="7">
              <b-form-input v-model="form.datetime.end.date" type="date" />
            </b-col>
            <b-col cols="5" class="pl-0">
              <b-form-input v-model="form.datetime.end.time" type="time" />
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="4" class="mt-4 text-center">
          <b-card class="shadowCard">
            <small class="mb-2">You will pay:</small>
            <p class="mb-0 price">$4.50</p>
            <!-- <b-card-sub-title class="mb-2">You will pay:</b-card-sub-title> -->
            <!-- <b-card-title>4.50CAD</b-card-title> -->
          </b-card>
        </b-col>
      </b-row>
      <b-row class="mb-3 mt-4">
        <b-col cols="auto">
          <b-button block type="submit" variant="danger">Cancel</b-button>
        </b-col>
        <b-col cols="auto" class="pl-0">
          <b-button block type="submit" variant="primary" @click="confirmBooking">Confirm Booking</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
  export default {
    name:"form2Parking",
    data() {
      return {
        name: 'Eduardo',
        address:'1234 100th King Edward  Vancouver,BC',
        description:'This is a cozy room, with its own bathroom. Though the entrance to the house is shared, the position of the guest suite allows for privacy.',
        parkingInstructions:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        form: {
          datetime: {
            start: {
              date: null,
              time: null
            },
            end: {
              date: null,
              time: null
            }
          }
        }
      }
    },
    methods: {
      confirmBooking() {        
        this.$emit('confirm-spot');
        this.$emit('datetime', this.form.datetime);
      },
      onSubmit(evt) {
        evt.preventDefault();
        // alert(JSON.stringify(this.form))
      }
    }
  }
</script>

<style scoped>
  .contactHost {
    /* margin: 1rem; */
    color: #00E5FF;
    font-weight: bold;
  }

  .backgroundCard {
    background: #EFF1F3;
    text-align: left;
    font-size: .8rem;
  }

  .shadowCard {
    box-shadow: 2px 2px grey;
    border-radius: 1rem;
    font-weight: bold;
  }

  .shadowCard .price {
    color: #00E5FF;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
  }

  img.img-fluid {
    /* Some CSS is overwritting the images' height when we use the component on the home page */
    height: auto !important;
  }
</style>
