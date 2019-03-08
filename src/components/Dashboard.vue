<template>
    <div id="app">

      <h2>Total Hours Booked</h2>
        <SemiPieChart />
        <Chart />
    </div>
</template>

<script>
import Chart from '@/components/Chart'
import SemiPieChart from '@/components/SemiPieChart'

export default {
    name: 'Dashboard',
    data() {
        return {}
    },
    components: {
        Chart,
        SemiPieChart
    }
}
</script>

<style scoped>

</style>
