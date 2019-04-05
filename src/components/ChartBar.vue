<template>
  <div id="myId">
    <column-chart
      :data="[['Sun', this.sunC], ['Mon', this.monC], ['Tue', this.tueC], ['Wed', this.wedC], ['Thu', this.thuC], ['Fri', this.friC], ['Sat', this.satC]]"
      :colors="['#1D3150']"
      :download="true"
      xtitle="Day of the week" ytitle="Bookings"
    ></column-chart>
	<!-- {{ status }} -->
    <!-- <p>Monday : {{ monC }}</p>
    <p>Tuesday : {{ tueC }}</p>
    <p>Wednesday : {{ wedC }}</p>
    <p>Thursday : {{ thuC }}</p>
    <p>Friday : {{ friC }}</p>
    <p>Saturday : {{ satC }}</p>
    <p>Sunday : {{ sunC }}</p> -->
  </div>
</template>

<script>
import Vue from "vue";
import VueChartkick from "vue-chartkick";
import Chart from "chart.js";

Vue.use(VueChartkick, { adapter: Chart });

const axios = require("axios");
export default {
  name: "ChartBar",
  data() {
    return {
      status: "",
      monC: 0,
      tueC: 0,
      wedC: 0,
      thuC: 0,
      friC: 0,
      satC: 0,
      sunC: 0
    };
  },
  created: function() {
	  console.log('hello world')
	  this.status = "Loading..."
	//   console.log(this.status)    // Working
	axios
		.get("https://testserver.iamharmangill.now.sh/api/get/getDay")
		.then(response => {
			var info = response.data
			console.log(info)

			// converts json to a string
			var my = JSON.stringify(info);
			// console.log(my)


			// splits the json according to the sign
          var sp = my.split('"');
          console.log(sp);
		  console.log("Date Selection Begins....");
		  

		   // prints date element from array
          var j = 3;
          var f = 0;
          var final = [];
          while (j <= sp.length) {
            console.log(sp[j]);
            // document.getElementById("myId").innerText = sp[j]

            this.myDate(sp[j]);
            j = j + 4;
          }
		})
		.catch(err => {
          vm.status = "An error occurred" + err;
        });
  },

  methods: {
    
    myDate: function(p) {
      //Date function
      var a = new Date(p);
      var days = new Array(7);
      days[0] = "Sunday";
      days[1] = "Monday";
      days[2] = "Tuesday";
      days[3] = "Wednesday";
      days[4] = "Thursday";
      days[5] = "Friday";
      days[6] = "Saturday";
      var r = days[a.getDay()];

      // console.log(r);

      this.smthng(r);
      // vm.status = final[f]
      // var s = final;

    //   return final;
    },
    smthng: function(r) {
		var vm = this;
		var f = 0
		var final = []
      final[f] = r;
      vm.status = final[f];
      console.log(vm.status);
      f += 1;

      //Counters
      if (vm.status == "Monday") {
        vm.monC++;
      }
      if (vm.status == "Tuesday") {
        vm.tueC++;
      }
      if (vm.status == "Wednesday") {
        vm.wedC++;
      }
      if (vm.status == "Thursday") {
        vm.thuC++;
      }
      if (vm.status == "Friday") {
        vm.friC++;
      }
      if (vm.status == "Saturday") {
        vm.satC++;
      }
      if (vm.status == "Sunday") {
        vm.sunC++;
      }
    }
  }
};
</script>

<style scoped>
</style>
