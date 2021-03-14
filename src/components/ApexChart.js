import React from 'react';
import Chart from "react-apexcharts";
import { 
  Text,
 } from '@chakra-ui/react'

const states = require('../data/states.json');
const cities = require('../data/cities.json');

const ApexChart = props => {
  const {
    location,
    typeChart
  } = props;

  console.log(states['FL']);

  const state = '' || 'FL'
  const languages = states[state].languages.filter(lang => lang.value > 0).sort((a, b) => b.value - a.value).slice(0, 10);
  const technologies = states[state].technologies.filter(lang => lang.value > 0).sort((a, b) => b.value - a.value).slice(0, 10);

  const languagesGraph = {
    series: [{
      data: toXY(languages)
    }],
    options: {
      chart: {
        type: 'bar',
        background: '#262D47'
      },
      plotOptions: {
        bar: {
          horizontal: false,
        }
      },
      theme: {
        mode: 'dark',
        palette: 'palette7',
        monochrome: {
          enabled: false,
          color: '#262D47',
          shadeTo: 'dark',
          shadeIntensity: 0.65
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },
      colors: ['#F44336', '#E91E63', '#9C27B0'],
      dataLabels: {
        enabled: false
      },
      xaxis: {
        seriesName: 'name',
        type: 'category'
      },
      yaxis: {
        seriesName: 'value',
        title: {
          text: 'Job postings',
          style: {
            fontSize: '12px'
          }
        }
      }
    },
  };

  const technologyGraph = {
    series: [{
      data: toXY(technologies)
    }],
    options: {
      chart: {
        type: 'bar',
        background: '#262D47'
      },
      plotOptions: {
        bar: {
          horizontal: false,
        }
      },
      theme: {
        mode: 'dark',
        palette: 'palette7',
        monochrome: {
          enabled: false,
          color: '#262D47',
          shadeTo: 'dark',
          shadeIntensity: 0.65
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },
      colors: ['#9C27B0'],
      dataLabels: {
        enabled: false
      },
      xaxis: {
        seriesName: 'name',
        type: 'category'
      },
      yaxis: {
        seriesName: 'value',
        title: {
          text: 'Job postings',
          style: {
            fontSize: '12px'
          }
        }
      }
    },
  };

  return (<div>
    <Text
      color="white"
      align="left"
      fontSize="lg"
      mb="5"
      >Top 10 Programming Languages</Text>
    <Chart
      options={languagesGraph.options}
      series={languagesGraph.series}
      type={typeChart}
      width="700"
    />
    <Text
      color="white"
      align="left"
      fontSize="lg"
      mb="5"
      mt="5"
      >Top 10 Frameworks & Libraries</Text>
    <Chart
      options={technologyGraph.options}
      series={technologyGraph.series}
      type={typeChart}
      width="700"
    />
  </div>
  )
}

export default ApexChart;

const toXY = (array) => {

  let result = [];
  array.forEach(element => {
    result.push({x: element.name, y: element.value});
  });

  return result;
}