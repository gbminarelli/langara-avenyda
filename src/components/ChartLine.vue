<template>
  <div id="myId">
    <line-chart
      :data="[['00:00', this.zero], ['01:00', this.one], ['02:00', this.two], ['03:00', this.three], ['04:00', this.four], ['05:00', this.five], ['06:00', this.six], ['07:00', this.seven], ['08:00', this.eight], ['09:00', this.nine],['10:00', this.oZero],['11:00', this.oOne],['12:00', this.oTwo],['13:00', this.oThree],['14:00', this.oFour],['15:00', this.oFive],['16:00', this.oSix],['17:00', this.oSeven],['18:00', this.oEight],['19:00', this.oNine],['20:00', this.tZero],['21:00', this.tOne],['22:00', this.tTwo],['23:00', this.tThree]]"
      :colors="['#1D3150']"
      :download="true"
      xtitle="Hour Of The Day" ytitle="Bookings"
    ></line-chart>
	
    <!-- {{ status }}
    <p>00 : {{ zero }}</p>
    <p>01 : {{ one }}</p>
    <p>02 : {{ two }}</p>
    <p>03 : {{ three }}</p>
    <p>04 : {{ four }}</p>
    <p>05 : {{ five }}</p>
    <p>06 : {{ six }}</p>
    <p>07 : {{ seven }}</p>
    <p>08 : {{ eight }}</p>
    <p>09 : {{ nine }}</p>
    <p>10 : {{ oZero }}</p>
    <p>11 : {{ oOne }}</p>
    <p>12 : {{ oTwo }}</p>
    <p>13 : {{ oThree }}</p>
    <p>14 : {{ oFour }}</p>
    <p>15 : {{ oFive }}</p>
    <p>16 : {{ oSix }}</p>
    <p>17 : {{ oSeven }}</p>
    <p>18 : {{ oEight }}</p>
    <p>19 : {{ oNine }}</p>
    <p>20 : {{ tZero }}</p>
    <p>21 : {{ tOne }}</p>
    <p>22 : {{ tTwo }}</p>
    <p>23 : {{ tThree }}</p> -->
  </div>
</template>

<script>
import Vue from "vue";
import VueChartkick from "vue-chartkick";
import Chart from "chart.js";

Vue.use(VueChartkick, { adapter: Chart });

const axios = require("axios");
export default {
  name: "ChartLine",
  data() {
    return {
      status: "",
      zero: 0,
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      seven: 0,
      eight: 0,
      nine: 0,
      oZero: 0,
      oOne: 0,
      oTwo: 0,
      oThree: 0,
      oFour: 0,
      oFive: 0,
      oSix: 0,
      oSeven: 0,
      oEight: 0,
      oNine: 0,
      tZero: 0,
      tOne: 0,
      tTwo: 0,
      tThree: 0
    };
  },
  created: function() {
    console.log("Hellooooooo Avenyda");
    this.status = "Loading...";
    axios
      .get("https://testserver.iamharmangill.now.sh/api/get/getDay")
      .then(response => {
        var info = response.data;
        console.log(info);

        // converts json to a string
        var my = JSON.stringify(info);

        // splits the json according to the sign
        var sp = my.split('"');
        console.log(sp);
        console.log(sp.length);
        console.log("Date Selection Begins....");

        // prints date element from array
        var j = 3;
        while (j <= sp.length) {
          console.log(sp[j]);
          this.hr(sp[j]);
          j = j + 4;
        }
      })
      .catch(err => {
        this.status = "An error occurred" + err;
      });
  },

  methods: {
    hr: function(p) {
      var vm = this;
      var hr = new Date(p);
      var utcHours = hr.getUTCHours();
      console.log(utcHours);

      //Counters....
      if (utcHours == "1") {
        vm.one++;
      }
      if (utcHours == "2") {
        vm.two++;
      }
      if (utcHours == "3") {
        vm.three++;
      }
      if (utcHours == "4") {
        vm.four++;
      }
      if (utcHours == "5") {
        vm.five++;
      }
      if (utcHours == "6") {
        vm.six++;
      }
      if (utcHours == "7") {
        vm.seven++;
      }
      if (utcHours == "8") {
        vm.eight++;
      }
      if (utcHours == "9") {
        vm.nine++;
      }
      if (utcHours == "10") {
        vm.oZero++;
      }
      if (utcHours == "11") {
        vm.oOne++;
      }
      if (utcHours == "12") {
        vm.oTwo++;
      }
      if (utcHours == "13") {
        vm.oThree++;
      }
      if (utcHours == "14") {
        vm.oFour++;
      }
      if (utcHours == "15") {
        vm.oFive++;
      }
      if (utcHours == "16") {
        vm.oSix++;
      }
      if (utcHours == "17") {
        vm.oSeven++;
      }
      if (utcHours == "18") {
        vm.oEight++;
      }
      if (utcHours == "19") {
        vm.oNine++;
      }
      if (utcHours == "20") {
        vm.tZero++;
      }
      if (utcHours == "21") {
        vm.tOne++;
        // var a = vm.tOne
      }
      if (utcHours == "22") {
        vm.tTwo++;
      }
      if (utcHours == "23") {
        vm.tThree++;
      }
      if (utcHours == "0") {
        vm.zero++;
      }
    }
  }
};
</script>

<style scoped>
</style>
// // getting hours from UTC Date
//           function hr(p) {
// 			var vm = this
//             var hr = new Date(p);
//             var utcHours = hr.getUTCHours();
//             console.log(utcHours);

//             //Counters....
//             if (utcHours == "1") {
//               vm.one++;
//             }
//             if (utcHours == "2") {
//               vm.two++;
//             }
//             if (utcHours == "3") {
//               vm.three++;
//             }
//             if (utcHours == "4") {
//               vm.four++;
//             }
//             if (utcHours == "5") {
//               vm.five++;
//             }
//             if (utcHours == "6") {
//               vm.six++;
//             }
//             if (utcHours == "7") {
//               vm.seven++;
//             }
//             if (utcHours == "8") {
//               vm.eight++;
//             }
//             if (utcHours == "9") {
//               vm.nine++;
//             }
//             if (utcHours == "10") {
//               vm.oZero++;
//             }
//             if (utcHours == "11") {
//               vm.oOne++;
//             }
//             if (utcHours == "12") {
//               vm.oTwo++;
//             }
//             if (utcHours == "13") {
//               vm.oThree++;
//             }
//             if (utcHours == "14") {
//               vm.oFour++;
//             }
//             if (utcHours == "15") {
//               vm.oFive++;
//             }
//             if (utcHours == "16") {
//               vm.oSix++;
//             }
//             if (utcHours == "17") {
//               vm.oSeven++;
//             }
//             if (utcHours == "18") {
//               vm.oEight++;
//             }
//             if (utcHours == "19") {
//               vm.oNine++;
//             }
//             if (utcHours == "20") {
//               vm.tZero++;
//             }
//             if (utcHours == "21") {
//               vm.tOne++;
//               // var a = vm.tOne
//             }
//             if (utcHours == "22") {
//               vm.tTwo++;
//             }
//             if (utcHours == "23") {
//               vm.tThree++;
//             }
//             if (utcHours == "0") {
//               vm.zero++;
//             }
//           }
// 	  })