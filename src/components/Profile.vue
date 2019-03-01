<template>

  <div id="one">
    <b-container class="home" fluid>
      <h2>Profile</h2>
      <b-list-group>

        <b-list-group-item class="d-flex justify-content-between align-items-center"><b-link href="#foo">Account details</b-link><b-badge  variant="light"><b-img src="../assets/Icons/arrow-right.svg" /></b-badge></b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center"><b-link href="#foo">Payment</b-link><b-badge  variant="light"><b-img src="../assets/Icons/arrow-right.svg" /></b-badge></b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center"><b-link href="#foo">Parking History</b-link><b-badge  variant="light"><b-img src="../assets/Icons/arrow-right.svg" /></b-badge></b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center"><b-link href="#foo">Favorites</b-link><b-badge  variant="light"><b-img src="../assets/Icons/arrow-right.svg" /></b-badge></b-list-group-item>

      </b-list-group>

      <h2>List Your Parking</h2>
      <b-list-group>

        <b-list-group-item class="d-flex justify-content-between align-items-center"><b-link href="#foo">Parking spots</b-link><b-badge  variant="light"><b-img src="../assets/Icons/arrow-right.svg" /></b-badge></b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center"><b-link href="#foo">Payout methods</b-link><b-badge  variant="light"><b-img src="../assets/Icons/arrow-right.svg" /></b-badge></b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center"><b-link href="#foo">Dashboard</b-link><b-badge  variant="light"><b-img src="../assets/Icons/arrow-right.svg" /></b-badge></b-list-group-item>
        
      </b-list-group>
    </b-container>
  </div>

</template>

<script>
export default {
    name:'Profile',
    data(){
        return{}
    },
    methods:{
        goHome(){
            this.$router.push({ name: 'Home'})
        },
    }
}
</script>

<style scoped>

  .home {
    height: 90vh;
  }

  h2 {
    text-align: left;
    color: #454F63;
    font-weight: bold;
    padding-top: 30px;
  }

  a {
    text-decoration: none;
    color: #454F63;
    font-weight: bold;
    font-size: 18px;
  }

  .list-group-item {
    text-align: left;
  }
</style>


