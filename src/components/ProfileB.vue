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
    <b-card no-body class="bcard">
      <b-tabs pills card vertical>
        <b-tab title="Tab 1" active><b-card>Tab Contents 1</b-card></b-tab>
        <b-tab title="Tab 2"><b-card>Tab Contents 2</b-card></b-tab>
        <b-tab title="Tab 3"><b-card>Tab Contents 3</b-card></b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name:'ProfileB',
  data(){
    return{}
  },
  methods:{
    // goHome(){
    //   this.$router.push({ name: 'Home'})
    // }
  }
}
</script>

<style scoped></style>
