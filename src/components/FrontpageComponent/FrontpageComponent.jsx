import React from 'react';
import SearchBar from './../SearchbarComponent/SearchBar';
import { Box, Center, chakra, Heading, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import FilterButtons from './../FilterButtons';
import Logo from './../../images/angle.png';

const FrontPage = () => {
  // react hook
  const [location, setLocation] = useState('');
  const [techFilter, setTechfilter] = useState([
    'rust',
    'javascript',
    'haskell',
    'java',
    'scala',
    'golang',
    'kotlin',
    'ruby',
    'python',
    'c++',
    'c#',
    'php',
    'f#',
    'ocaml',
    'typescript',
    'elixir',
    'swift',
    'c',
  ]);

  // to handle location change
  const handleChange = (e) => setLocation(e.target.value.trim().toLowerCase());

  const handleClick = (name) => {
    if (!techFilter.includes(name.toLowerCase())) {
      setTechfilter([...techFilter, name.toLowerCase()]);
    } else {
      setTechfilter(techFilter.filter((e) => e !== name.toLowerCase()));
    }
  };

  // to handle searching and moving to next page
  const submitSearch = (search) => {
    console.log(search);
    console.log(techFilter);
  };

  return (
    <Box m='auto' p='10' w='70%'>
      <Center>
        <Box>
          <Image
            m='auto'
            boxSize='100px'
            mb='10'
            borderRadius='full'
            src={Logo}
            alt=''
          ></Image>
          <Heading
            fontSize='4rem'
            m='auto'
            mb='5'
            color='white'
            textAlign='center'
          >
            Popular <chakra.span color='teal.300'>Languages</chakra.span>
          </Heading>
          <Text color='white' align='center' fontSize='lg' mb='10'>
            Find popular programming languages and frameworks near you
          </Text>
          <SearchBar
            handleChange={handleChange}
            submitSearch={submitSearch}
            location={location}
          />
          <FilterButtons
            colNum={5}
            handleClick={handleClick}
            techFilter={techFilter}
          />
        </Box>
      </Center>
    </Box>
  );
};

export default FrontPage;
