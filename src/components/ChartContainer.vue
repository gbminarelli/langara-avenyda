<template>
  <div class="container">
    <line-chart
            v-if="loaded"
            :chartdata="chartdata"
            :options="options"/>
  </div>
</template>

<script>
  import LineChart from './Chart.js'

  export default {
    name: 'LineChartContainer',
    components: { LineChart },
    data: () => ({
      loaded: false,
      chartdata: null
    }),
    async mounted () {
      this.loaded = false
      try {
        const { userlist } = await fetch('https://wmdd-get-w5-1542jkb8k.now.sh/api/get/parkingSpot')
        this.chartData = userlist
        this.loaded = true
      } catch (e) {
        console.error(e)
      }
    }
  }
</script>
