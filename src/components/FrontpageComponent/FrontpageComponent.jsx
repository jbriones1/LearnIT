import React from 'react';
import SearchBar from './../SearchbarComponent/SearchBar';
import {
  Box,
  Button,
  Center,
  chakra,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import FilterButtons from './../FilterButtons';
import Logo from '../../images/angle.png';

const FrontPage = () => {
  // react hook
  const [location, setLocation] = useState('');

  // to handle location change
  const handleChange = (e) => setLocation(e.target.value);

  return (
    <Box m='auto' p='10' w='70%'>
      <Center>
        <Box>
          <Image boxSize='100px' m='auto' mb='5' src={Logo} alt=''></Image>
          <Heading fontSize='4rem' m='auto' textAlign='center' color='white'>
            Popular <chakra.span color='teal.300'>Languages</chakra.span>
          </Heading>
          <Text color='white' align='center' fontSize='lg' mb='10'>
            Find popular programming languages and frameworks near you
          </Text>
          <SearchBar handleChange={handleChange} />
          <Stack my='10' align='center'>
            <Button
              backgroundColor='teal.100'
              color='black'
              w='250px'
              h='50px'
              borderRadius='15px'
              p='7'
              fontSize='xl'
            >
              Get Started <ArrowForwardIcon />
            </Button>
          </Stack>
          <FilterButtons colNum={5} />
        </Box>
      </Center>
    </Box>
  );
};

export default FrontPage;
