<template>
  <div id="app">
    <h2>Overview</h2>

    <div>

      <b-button variant="light">DAY</b-button>
      <b-button variant="light">WEEK</b-button>
      <b-button variant="light">MONTH</b-button>
      <b-button variant="light">YEAR</b-button>
    </div>

    <div>
      <h1 style="font-size: 80px">$2K</h1>
      <h5>TOTAL EARNINGS</h5>
    </div>

    <div class="chartpie">
      <h3>TOTAL HOURS WORKED</h3>
      <ChartPie />
    </div>

    <div class="chartbar">
      <h3>USERS ANALYSIS</h3>
      <ChartBar />
    </div>

    <div class="chartline">
      <h3>AVERAGE BOOKED BY USER</h3>
      <ChartLine />
    </div>
  </div>
</template>

<script>
import ChartBar from "@/components/ChartBar";
import ChartLine from "@/components/ChartLine";
import ChartPie from "./ChartPie";

export default {
  name: "Dashboard",
  data() {
    return {};
  },
  components: {
    ChartPie,
    ChartBar,
    ChartLine
  }
};
</script>

<style scoped>
  #app {
    padding: 10px;
    /*border: 10px solid lightgrey;*/
    /*background-color: lightgrey;*/
  }
</style>
