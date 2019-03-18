<template>
  <!-- <b-container class="p-5 text-left" id="profile" fluid>
    <h2 class="my-4">Profile</h2>
    <b-list-group class="mb-5">
      <b-list-group-item href="#">Account details</b-list-group-item>
      <b-list-group-item href="#">Payment methods</b-list-group-item>
      <b-list-group-item href="#">Parking history</b-list-group-item>
      <b-list-group-item href="#">Favorites</b-list-group-item>
    </b-list-group>
    <h2 class="my-4">List your parking</h2>
    <b-list-group>
      <b-list-group-item href="#">Parking spots</b-list-group-item>
      <b-list-group-item href="#">Payouts methods</b-list-group-item>
      <b-list-group-item href="#">Dashboard</b-list-group-item>
    </b-list-group>
  </b-container> -->
  <b-container class="p-5 text-left" id="profile" fluid>
    <b-card no-body class="bcard-profile">
      <b-tabs card vertical v-model="tabIndex" class="flex-column flex-lg-row" id="tabs">
        <b-tab disabled>
          <template slot="title">
            <h2 class="mb-2">Profile</h2>
          </template>
        </b-tab>
        <b-tab title="Account details" :title-link-class="linkClass(1)"><b-card></b-card></b-tab>
        <b-tab title="Payment methods" :title-link-class="linkClass(2)"><b-card></b-card></b-tab>
        <b-tab title="Parking history" :title-link-class="linkClass(3)"><b-card></b-card></b-tab>
        <b-tab title="Favorites" :title-link-class="linkClass(4)"><b-card></b-card></b-tab>
        <b-tab disabled>
          <template slot="title">
            <h2 class="mb-2 mt-5">List your parking</h2>
          </template>
        </b-tab>
        <b-tab title="Parking spots" :title-link-class="linkClass(6)"><b-card>
          <NewSpot />
        </b-card></b-tab>
        <b-tab title="Payouts methods" :title-link-class="linkClass(7)"><b-card></b-card></b-tab>
        <b-tab title="Dashboard" :title-link-class="linkClass(8)"><b-card>
          <Dashboard />
        </b-card></b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
import NewSpot from '@/components/NewSpot'
import Dashboard from '@/components/Dashboard'
export default {
  name:'ProfileB',
  components: {
    NewSpot,
    Dashboard
  },
  data(){
    return{
      tabIndex: 0
    }
  },
  methods:{
    // goHome(){
    //   this.$router.push({ name: 'Home'})
    // }
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-secondary', 'text-white']
      } else {
        return ['bg-light', 'text-dark']
      }
    }
    // linkClass(idx) {
    //   if (this.tabIndex === idx) {
    //     return ['bg-primary', 'text-light']
    //     // return ['tabIndexSelected']
    //   } else {
    //     return ['bg-light', 'text-info']
    //   }
    // }
  }
}
</script>

<style scoped>
  h2 {
    font-size: 1.9rem;
    color: #454F63;
  }
</style>
