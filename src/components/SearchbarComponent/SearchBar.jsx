import React, { useState } from 'react';
import { Input, Center, Stack, Button } from '@chakra-ui/react';
import statesInfo from '../../data/states.json';
import citiesInfo from '../../data/cities.json';
import { ArrowForwardIcon } from '@chakra-ui/icons'

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
    return suggestions.map(str => str.toUpperCase());
  } else {
    return suggestions.slice(0, 5).map(str => str.toUpperCase());
  }
};

const SearchBar = ({ handleChange, submitSearch }) => {
  const [suggestions, setSuggestions] = useState([]);

  const [searchLocation, setSearchLocation] = useState('');

  const onSubmit = (e) => {
    if (!searchLocation || !locations.includes(searchLocation)) {
      alert("Location not found");
      return;
    }

    submitSearch(searchLocation);
  }

  return (
    <>
      <Input
        id="searchBar"
        placeholder='Enter location'
        size='lg'
        color="white"
        fontSize="xl"
        text={searchLocation}
        onChange={(e) => {
          setSuggestions(getSuggestions(e.target.value.trim().toLowerCase()));
          setSearchLocation(e.target.value.trim());
          console.log(searchLocation);
          handleChange(e);
        }}
      />
      {suggestions.length !== 0 &&
        suggestions.map((suggestion) => <Center my="2"
          color="white"
          fontWeight="light"
          fontSize="xl">{suggestion}</Center>)}
      <Stack my="10"
        align="center">
        <Button backgroundColor="teal.100"
          color="black"
          w="250px"
          h="50px"
          borderRadius="15px"
          p="7"
          fontSize="xl"
          onClick={onSubmit}
        >Get Started <ArrowForwardIcon /></Button>
      </Stack>
    </>
  );
};

export default SearchBar;
