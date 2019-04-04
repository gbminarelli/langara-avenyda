export const planetChartDataPie = {
  type: "doughnut",
  data: {
    labels: [
      'Hours Worked',
      '',
    ],
    datasets: [
      {
        // one line graph
        label: "Total Hours Worked",
        data: [10, 20],
        backgroundColor: [
          "#1D3150"
        ],
        borderColor: ["#1D3150"],
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
