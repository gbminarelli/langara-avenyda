<template>
  <div class="container">
    <line-chart
            v-if="loaded"
            :chartdata="[['Sun', this.sunC], ['Mon', this.monC], ['Tue', tueC], ['Wed', this.wedC], ['Thu', this.thuC], ['Fri', friC], ['Sat', satC]]"
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
      var vm = this
      try {
        const { userlist } = await fetch('https://testserver.iamharmangill.now.sh/api/get/getDay')
        .then((response) => {
                        info = response.data
                        // converts json to a string
                        var my = JSON.stringify(info);

                        // splits the json according to the sign
                        var sp = my.split('"');
                        console.log(sp);
                        console.log("Date Selection Begins....")


                        // prints date element from array
                        var j = 3;
                        var f = 0
                        var final = []
                        while (j <= sp.length) {
                            console.log(sp[j]);
                            // document.getElementById("myId").innerText = sp[j]

                            myDate(sp[j]);
                            j = j + 4;
                        }
                        //Date function
                        function myDate(p) {
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

                            smthng(r)
                            // vm.status = final[f]
                            // var s = final;

                            return final

                        }

                        function smthng(r) {
                            final[f] = r
                            vm.status = final[f]
                            console.log(vm.status)
                            f += 1

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
                    }).catch((err) => {
                        vm.status = 'An error occurred' + err
                    });
        
        this.chartData = userlist
        this.loaded = true
      } catch (e) {
        console.error(e)
      }
    }
  }
</script>
