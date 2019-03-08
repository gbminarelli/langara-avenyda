<template>
    <div id="app">
        <canvas id="planet-chart3"></canvas>
    </div>
</template>

<script>
    import Chart from "chart.js";
    import planetChartDataPie from "./chart-pie";

    export default {
        name: "ChartPie",
        data() {
            return {
                planetChartDataPie: planetChartDataPie
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
            this.createChart("planet-chart3", this.planetChartDataPie);
        }
    };
</script>

<style scoped></style>
