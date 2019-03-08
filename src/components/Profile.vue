<template>
  <div id="one" fluid>
    <b-container class="home" fluid>
      <h2>Profile</h2>
      <b-list-group>
        
        <b-list-group-item
          class="d-flex justify-content-between align-items-center "
          ><b-link @click="show = !show" v-b-toggle.accordion1>
            Account Settings</b-link
          ><b-badge variant="light"
            ><b-img src="../assets/Icons/arrow-right.svg"/></b-badge
        ></b-list-group-item>

        <AccountDetails />

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          ><b-link @click="show = !show" v-b-toggle.accordion2>Payment</b-link
          ><b-badge variant="light"
            ><b-img src="../assets/Icons/arrow-right.svg"/></b-badge
        ></b-list-group-item>


        <Payment />

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          ><b-link href="#foo">Parking History</b-link
          ><b-badge variant="light"
            ><b-img src="../assets/Icons/arrow-right.svg"/></b-badge
        ></b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          ><b-link href="#foo">Favorites</b-link
          ><b-badge variant="light"
            ><b-img src="../assets/Icons/arrow-right.svg"/></b-badge
        ></b-list-group-item>
      </b-list-group>

      <h2>List Your Parking</h2>
      <b-list-group>
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          ><b-link href="#foo">Parking spots</b-link
          ><b-badge variant="light"
            ><b-img src="../assets/Icons/arrow-right.svg"/></b-badge
        ></b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          ><b-link href="#foo">Payout methods</b-link
          ><b-badge variant="light"
            ><b-img src="../assets/Icons/arrow-right.svg"/></b-badge
        ></b-list-group-item>

        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          ><b-link @click="show = !show" v-b-toggle.dashboard1>Dashboard</b-link
          ><b-badge variant="light"
            ><b-img src="../assets/Icons/arrow-right.svg"/></b-badge
        ></b-list-group-item>

        <Dashboard />
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
import AccountDetails from "./AccountDetails";
import Payment from "./Payment";
import Dashboard from "./Dashboard";

export default {
  name: "Profile",
  components: {
    Dashboard,
    AccountDetails,
    Payment
  },
  data() {
    show: false;
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped>
.home {
  height: 90vh;
}

h2 {
  text-align: left;
  color: #454f63;
  font-weight: bold;
  padding-top: 30px;
}

a {
  text-decoration: none;
  color: #454f63;
  font-weight: bold;
  font-size: 18px;
}

.list-group-item {
  text-align: left;
}
#one {
  height: max-content;
}
</style>
