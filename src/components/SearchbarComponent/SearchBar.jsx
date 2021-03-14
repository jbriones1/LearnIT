import React, { useState } from 'react';
import { Input, Center } from '@chakra-ui/react';
import statesInfo from '../../data/states.json';
import citiesInfo from '../../data/cities.json';

const cities = Object.keys(citiesInfo);

const states = Object.keys(statesInfo).map((state) => state.toLowerCase());

const locations = [...cities, ...states];

const getSuggestions = (value) => {
  if (value.length == 0) {
    return [];
  }

  const suggestions = locations.filter((location) => {
    return (
      value === location.substring(0, value.length) || location.includes(value)
    );
  });

  if (suggestions.length < 5) {
    return suggestions;
  } else {
    return suggestions.slice(0, 5);
  }
};

const SearchBar = ({ handleChange }) => {
  const [suggestions, setSuggestions] = useState([]);

  return (
    <>
      <Input
        placeholder='Enter location'
        size='lg'
        onChange={(e) => {
          setSuggestions(getSuggestions(e.target.value.trim().toLowerCase()));
          handleChange(e);
        }}
      />
      {suggestions.length !== 0 &&
        suggestions.map((suggestion) => <Center>{suggestion}</Center>)}
    </>
  );
};

export default SearchBar;
