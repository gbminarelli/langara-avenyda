export const planetChartDataPie = {
  type: "doughnut",
  data: {
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ],
    datasets: [
      {
        // one line graph
        label: "Number of Moons",
        data: [10, 20, 30],
        backgroundColor: [
          "rgba(0, 255, 255, .9)"
        ],
        borderColor: ["#00ffff"],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    rotation: Math.PI,
    circumference: Math.PI,
    legend: {
      display: false
    }
  }
};

export default planetChartDataPie;
