

export const planetChartDataBar = {
    type: 'bar',
    data: {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUB'],
        datasets: [
            { // one line graph
                
                label: 'Total Users',
                data: [10, 15, 8, 17, 67, 62, 27, 14],
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
            // { // another line graph
            //     label: 'Planet Mass (x1,000 km)',
            //     data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
            //     backgroundColor: [
            //         'rgba(71, 183,132,.5)', // Green
            //     ],
            //     borderColor: [
            //         '#47b784',
            //     ],
            //     borderWidth: 3
            // }
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
    }
};

export default planetChartDataBar;
