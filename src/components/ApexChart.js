import React from 'react';
import Chart from 'react-apexcharts';
import { Text } from '@chakra-ui/react';
import useWindowSize from '../hooks/useWindowSize';

const statesAbbrevation = {};

const statesAb = {
  arizona: 'AZ',
  alabama: 'AL',
  alaska: 'AK',
  arkansas: 'AR',
  california: 'CA',
  colorado: 'CO',
  connecticut: 'CT',
  delaware: 'DE',
  florida: 'FL',
  georgia: 'GA',
  hawaii: 'HI',
  idaho: 'ID',
  illinois: 'IL',
  indiana: 'IN',
  iowa: 'IA',
  kansas: 'KS',
  kentucky: 'KY',
  louisiana: 'LA',
  maine: 'ME',
  maryland: 'MD',
  massachusetts: 'MA',
  michigan: 'MI',
  minnesota: 'MN',
  mississippi: 'MS',
  missouri: 'MO',
  montana: 'MT',
  nebraska: 'NE',
  nevada: 'NV',
  'new hampshire': 'NH',
  'new jersey': 'NJ',
  'new mexico': 'NM',
  'new york': 'NY',
  'north carolina': 'NC',
  'north dakota': 'ND',
  ohio: 'OH',
  oklahoma: 'OK',
  oregon: 'OR',
  pennsylvania: 'PA',
  'rhode island': 'RI',
  'south carolina': 'SC',
  'south dakota': 'SD',
  tennessee: 'TN',
  texas: 'TX',
  utah: 'UT',
  vermont: 'VT',
  virginia: 'VA',
  washington: 'WA',
  'west virginia': 'WV',
  wisconsin: 'WI',
  wyoming: 'WY',
};

const states = require('../data/states.json');
const cities = require('../data/cities.json');

const isState = (location) =>
  states[statesAb[location.toLowerCase()]] != null || states[location] != null;

const isCity = (location) => cities[location] != null;

const ApexChart = ({ location, techFilter }) => {
  const locationIsState = isState(location.toUpperCase());
  const locationIsCity = isCity(location);
  const { width, height } = useWindowSize();

  if (!locationIsState && !locationIsCity) {
    return (
      <Text color='white' align='center'>
        Sorry {location} doesn't exist ;({' '}
      </Text>
    );
  }

  const data = locationIsState
    ? states[location.toUpperCase()]
    : cities[location];
  // console.log(states['FL']);

  // const state = '' || 'FL';

  const languages = (data ?? states[statesAb[location]]).languages
    .filter((lang) => lang.value > 0)
    .filter((lang) => techFilter.includes(lang.name))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10);
  const technologies = (data ?? states[statesAb[location]]).technologies
    .filter((lang) => lang.value > 0)
    .sort((a, b) => b.value - a.value)
    .slice(0, 10);

  const languagesGraph = {
    series: [
      {
        data: toXY(languages),
      },
    ],
    options: {
      chart: {
        type: 'bar',
        background: '#262D47',
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      theme: {
        mode: 'dark',
        palette: 'palette7',
        monochrome: {
          enabled: false,
          color: '#262D47',
          shadeTo: 'dark',
          shadeIntensity: 0.65,
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
          stops: [0, 100, 100, 100],
        },
      },
      colors: ['#F44336', '#E91E63', '#9C27B0'],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        seriesName: 'name',
        type: 'category',
      },
      yaxis: {
        seriesName: 'value',
        title: {
          text: 'Job postings',
          style: {
            fontSize: '12px',
          },
        },
      },
    },
  };

  const technologyGraph = {
    series: [
      {
        data: toXY(technologies),
      },
    ],
    options: {
      chart: {
        type: 'bar',
        background: '#262D47',
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      theme: {
        mode: 'dark',
        palette: 'palette7',
        monochrome: {
          enabled: false,
          color: '#262D47',
          shadeTo: 'dark',
          shadeIntensity: 0.65,
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
          stops: [0, 100, 100, 100],
        },
      },
      colors: ['#9C27B0'],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        seriesName: 'name',
        type: 'category',
      },
      yaxis: {
        seriesName: 'value',
        title: {
          text: 'Job postings',
          style: {
            fontSize: '12px',
          },
        },
      },
    },
  };

  return (
    <div>
      <Text color='teal.200' align='center' fontSize='xl'>
        {languages.length > 0 && technologies.length > 0
          ? `Statistics for ${location.toUpperCase()}`
          : `Sorry no data for ${location.toUpperCase()}`}
      </Text>

      {languages.length > 0 && (
        <>
          <Text color='white' align='center' fontSize='lg' mb='5'>
            Top 10 Programming Languages
          </Text>
          <Chart
            options={languagesGraph.options}
            series={languagesGraph.series}
            type='bar'
            width={width > 550 ? '550' : '300'}
          />
        </>
      )}

      {technologies.length > 0 && (
        <>
          <Text color='white' align='center' fontSize='lg' mb='5' mt='5'>
            Top 10 Frameworks & Libraries
          </Text>
          <Chart
            options={technologyGraph.options}
            series={technologyGraph.series}
            type='bar'
            width={width > 550 ? '550' : '300'}
          />
        </>
      )}
    </div>
  );
};

export default ApexChart;

const toXY = (array) => {
  let result = [];
  array.forEach((element) => {
    result.push({ x: element.name, y: element.value });
  });

  return result;
};
