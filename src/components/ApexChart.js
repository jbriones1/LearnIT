import React from 'react';
import Chart from "react-apexcharts";

const ApexChart = props => {
  const { data, typeChart } = props;

  // you need to change data field and categories
  const barGraph = {
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
          'United States', 'China', 'Germany'
        ],
      }
    },
  };

  return (
    <Chart
      options={barGraph.options}
      series={barGraph.series}
      type={typeChart}
      width="500"
    />
  )
}

export default ApexChart;