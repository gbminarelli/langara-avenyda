

var vm = new Vue({
    // el: '#myId',
    data: {
        status: '',
        monC: 0,
        tueC: 0,
        wedC: 0,
        thuC: 0,
        friC: 0,
        satC: 0,
        sunC: 0
    },

    created: function () {
        this.loadData();
    },

    methods: {
        loadData: function () {
            this.status = 'Loading...';
            var vm = this;
            axios.get('https://testserver.iamharmangill.now.sh/api/get/getDay')
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
        },



    }


});