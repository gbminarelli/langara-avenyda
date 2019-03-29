<template>
    <div id="app">
	<section class="container">
    <h1>Demo examples of vue-chartkick</h1>
    <!-- <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <line-chart :data="chartData"></line-chart>
      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <bar-chart :data="[['Work', 1322], ['Play', 1492]]"></bar-chart>
      </div>
    </div> -->
    <div class="columns">
      <!-- <div class="column">
        <h3>Scatter Chart</h3>
       	<scatter-chart :data="[[174.0, 80.0], [176.5, 82.3], [180.3, 73.6]]"></scatter-chart>
      </div> -->
      <div class="column">
        <h3>Downloadable Line Chart</h3>
        <line-chart :data="chartData" :download="true"></line-chart>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Vue from 'vue'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(VueChartkick, {adapter: Chart})

const axios = require('axios');


export default {
	el: '#app',
	data () {
		return {
            chartData: [['Jan', 44], ['Feb', 27], ['Mar', 60], ['Apr', 55], ['May', 37], ['Jun', 40], ['Jul', 69], ['Aug', 33], ['Sept', 76], ['Oct', 90], ['Nov', 34], ['Dec', 22]]
            // someData: created()
		}  
    },
    methods: {
        created: function() {
            axios
                .get('https://testserver.iamharmangill.now.sh/api/get/getDay')
                // .then(response => {
                // this.fee = response.data

                // })

                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                console.log(error)
                })

                // async function getUser() {
                //     try {
                //         const response = await axios.get('/user?ID=12345');
                //         console.log(response);
                //     } catch (error) {
                //         console.error(error);
                //     }
                // }
        }
    }
}
</script>

<style scoped>
    h1 {
	text-align: center;
	margin-top: 20px;
	margin-bottom: 30px;
}
.container {
	padding: 20px;
}
</style>
