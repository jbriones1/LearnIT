import React from 'react';
import Chart from "react-apexcharts";

const states = require('../data/states.json');
const cities = require('../data/cities.json');

const ApexChart = props => {
  const {
    data,
    typeChart
  } = props;

  const languages = states["FL"].languages;

  // you need to change data field and categories
  const barGraph = {
    series: [{
      data: languages.sort((a, b) => b.y - a.y)
    }],
    options: {
      chart: {
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        type: 'category'
      }
    },
  };

  return ( <
    Chart options = {
      barGraph.options
    }
    series = {
      barGraph.series
    }
    type = {
      typeChart
    }
    width = "500" /
    >
  )
}

export default ApexChart;

// const jsonToArray = (object) => {
//   let result = [];

//   Object.keys(object).forEach(key => {

//     let temp = {
//       x: key,
//       y: object[key]
//     }

//     result.push(temp);
//   });

//   return result;
// }