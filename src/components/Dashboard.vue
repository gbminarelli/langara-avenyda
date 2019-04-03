<template>
  <div id="app">
    <b-collapse
      id="dashboard1"
      visible
      accordion="my-accordion3"
      role="tabpanel"
    >
      <h2>Overview</h2>

      <div class="btnmenu">
        <b-button variant="light" pl="2">DAY</b-button>
        <b-button variant="light">WEEK</b-button>
        <b-button variant="light">MONTH</b-button>
        <b-button variant="light">YEAR</b-button>
      </div>

      <div class="totear">
        <h1>$2K</h1>
        <h5 style="padding-bottom: 20px">TOTAL EARNINGS</h5>
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
    </b-collapse>
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
    background-color: #EFF1F3;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
  }

  .btnmenu {
    background-color: white;
    margin: 15px;
  }

  .chartpie {
    background-color: white;
    margin: 15px;
  }

  .chartbar {
    background-color: white;
    margin: 15px;
  }

  .chartline {
    background-color: white;
    margin: 15px;
  }

  .totear {
    background-color: white;
    margin: 15px;
  }

  h1 {
    font-size: 70px;
    margin-bottom: 0;
    color: #00E5FF;
    font-weight: bold;
  }

  h3 {
    font-size: 20px;
    padding-top: 30px;
  }

  h2 {
    text-align: left;

    margin: 15px;
    margin-top: 15px;
    margin-bottom: 30px;
    color: #454F63;
  }

  @media (min-width: 600px){
    #dashboard1 {
      display: grid;
      grid-template-columns: 1.5fr 3fr;
      grid-template-rows: 80px 70px .6fr 1fr 2fr;
    }

    h2 {
      grid-column: 1/3;
      grid-row: 1/2;
    }

    .btnmenu {
      grid-column: 1/3;
      grid-row: 2/3;
    }

    .totear {
      grid-column: 1/2;
      grid-row: 3/4;
    }

    .chartpie {
      grid-column: 1/2;
      grid-row: 4/5;
    }

    .chartbar {
      grid-column: 2/3;
      grid-row: 3/5;
    }

    .chartline {
      grid-column: 1/3;
      grid-row: 5/6;
    }
  }

</style>
