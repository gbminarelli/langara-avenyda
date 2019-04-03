

import apidata from './apidata.js'

export const planetChartDataBar = {
    type: 'bar',
    data: {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [
            { // one line graph
                
                label: 'Total Users',
                data: ['this.monC', 15, 8, 17, 67, 62, 27],
                backgroundColor: [
                    'rgb(54,73,93)', // Blue
                    'rgba(54,73,93,.5)',
                    'rgba(54,73,93,.5)',
                    'rgba(54,73,93,.5)',
                    'rgb(54,73,93)',
                    'rgba(54,73,93,.5)',
                    'rgba(54,73,93,.5)'
                ],
                borderColor: [
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                ],
                borderWidth: 3
            },
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        legend: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 25,
                }
            }]
        }
    },
    // loadData: function () {
    //     this.status = 'Loading...';
    //     var vm = this;
    //     axios.get('https://testserver.iamharmangill.now.sh/api/get/getDay')
    //         .then((response) => {
    //             info = response.data
    //             // converts json to a string
    //             var my = JSON.stringify(info);

    //             // splits the json according to the sign
    //             var sp = my.split('"');
    //             console.log(sp);
    //             console.log("Date Selection Begins....")


    //             // prints date element from array
    //             var j = 3;
    //             var f = 0
    //             var final = []
    //             while (j <= sp.length) {
    //                 console.log(sp[j]);
    //                 // document.getElementById("myId").innerText = sp[j]

    //                 myDate(sp[j]);
    //                 j = j + 4;
    //             }
    //             //Date function
    //             function myDate(p) {
    //                 var a = new Date(p);
    //                 var days = new Array(7);
    //                 days[0] = "Sunday";
    //                 days[1] = "Monday";
    //                 days[2] = "Tuesday";
    //                 days[3] = "Wednesday";
    //                 days[4] = "Thursday";
    //                 days[5] = "Friday";
    //                 days[6] = "Saturday";
    //                 var r = days[a.getDay()];

    //                 // console.log(r);

    //                 smthng(r)
    //                 // vm.status = final[f]
    //                 // var s = final;

    //                 return final

    //             }

    //             function smthng(r) {
    //                 final[f] = r
    //                 vm.status = final[f]
    //                 console.log(vm.status)
    //                 f += 1

    //                 //Counters
    //                 if (vm.status == "Monday") {
    //                     vm.monC++;
    //                 }
    //                 if (vm.status == "Tuesday") {
    //                     vm.tueC++;
    //                 }
    //                 if (vm.status == "Wednesday") {
    //                     vm.wedC++;
    //                 }
    //                 if (vm.status == "Thursday") {
    //                     vm.thuC++;
    //                 }
    //                 if (vm.status == "Friday") {
    //                     vm.friC++;
    //                 }
    //                 if (vm.status == "Saturday") {
    //                     vm.satC++;
    //                 }
    //                 if (vm.status == "Sunday") {
    //                     vm.sunC++;
    //                 }
    //             }
    //         }).catch((err) => {
    //             vm.status = 'An error occurred' + err
    //         });
    // },

};

export default planetChartDataBar;
