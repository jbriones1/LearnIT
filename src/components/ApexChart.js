import React from 'react';
import Chart from "react-apexcharts";

const states = require('../data/states.json');
const cities = require('../data/cities.json');

const ApexChart = props => {
  const {
    data,
    typeChart
  } = props;

  const state = '' || 'FL'
  const languages = states[state].languages.filter(lang => lang.y > 0).sort((a, b) => b.y - a.y).slice(0, 10);
  const technologies = states[state].technologies.filter(lang => lang.y > 0).sort((a, b) => b.y - a.y).slice(0, 10);

  const languagesGraph = {
    series: [{
      data: languages
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
        type: 'category'
      },
      yaxis: {
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
      data: technologies
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
        type: 'category'
      },
      yaxis: {
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
    <Chart
      options={languagesGraph.options}
      series={languagesGraph.series}
      type={typeChart}
      width="500"
    />
    <Chart
      options={technologyGraph.options}
      series={technologyGraph.series}
      type={typeChart}
      width="500"
    />
  </div>
  )
}

export default ApexChart;