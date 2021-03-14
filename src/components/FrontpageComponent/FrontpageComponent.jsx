import React from 'react';
import SearchBar from './../SearchbarComponent/SearchBar';
import { Box, Image } from '@chakra-ui/react';
import { useState } from 'react';

const FrontPage = () => {
  // react hook
  const [location, setLocation] = useState('');

  // to handle location change
  const handleChange = (e) => setLocation(e.target.value);

  return (
    <Box>
      <Image></Image>
      <SearchBar handleChange={handleChange} />
    </Box>
  );
};

export default FrontPage;
