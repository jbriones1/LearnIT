import React, { useState } from 'react';
import {
  Input,
  Center,
  Stack,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import statesInfo from '../../data/states.json';
import citiesInfo from '../../data/cities.json';
import { ArrowForwardIcon, Search2Icon } from '@chakra-ui/icons';

const cities = Object.keys(citiesInfo);

const states = Object.keys(statesInfo).map((state) => state.toLowerCase());

const locations = [...cities, ...states];

const getSuggestions = (value) => {
  if (value.length === 0) {
    return [];
  }

  const sanitized = value.replace(/(\s|\t)*,(\s|\t)*/g, ',');

  const suggestions = locations.filter((location) => {
    return (
      sanitized === location.substring(0, value.length) ||
      location.includes(sanitized)
    );
  });

  if (suggestions.length < 5) {
    return suggestions.map((str) => str.toUpperCase());
  } else {
    return suggestions.slice(0, 5).map((str) => str.toUpperCase());
  }
};

const SearchBar = ({ handleChange, submitSearch, location }) => {
  const [suggestions, setSuggestions] = useState([]);

  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<Search2Icon color='teal.200' />}
          mt='1'
        />
        <Input
          id='searchBar'
          placeholder='Enter location'
          size='lg'
          color='white'
          fontSize='xl'
          onChange={(e) => {
            setSuggestions(getSuggestions(e.target.value.trim().toLowerCase()));
            handleChange(e);
          }}
        />
      </InputGroup>
      {suggestions.length !== 0 &&
        suggestions.map((suggestion) => (
          <Center
            my='2'
            key={suggestion}
            color='white'
            fontWeight='light'
            fontSize='xl'
          >
            {suggestion}
          </Center>
        ))}
    </>
  );
};

export default SearchBar;
