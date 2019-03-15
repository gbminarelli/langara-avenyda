export const planetChartData = {
  type: "line",
  data: {
    labels: [
      "00:00",
      "01:00",
      "02:00",
      "03.00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00"
    ],
    datasets: [
      {
        // one line graph
        label: "Number of Moons",
        data: [45, 20, 65, 62, 27, 14, 45, 20, 65, 62, 27, 14],
        backgroundColor: [
          "rgba(0, 255, 255, .6)" // Blue
          //     'rgba(54,73,93,.5)',
          //     'rgba(54,73,93,.5)',
          //     'rgba(54,73,93,.5)',
          //     'rgba(54,73,93,.5)',
          //     'rgba(54,73,93,.5)',
        ],
        borderColor: ["#00ffff"],
        borderWidth: 3
      }
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
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25
          }
        }
      ]
    }
  }
};

export default planetChartData;
