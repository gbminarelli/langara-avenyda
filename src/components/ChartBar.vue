<template>
  <div id="app">
    <canvas id="planet-chart2"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartDataBar from "./chart-bar";

export default {
  name: "ChartBar",
  data() {
    return {
      planetChartDataBar: planetChartDataBar
    };
  },

  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },

  mounted() {
    this.createChart("planet-chart2", this.planetChartDataBar);
  }
};
</script>

<style scoped></style>
