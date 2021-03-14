import React from 'react'
import SearchBar from './../SearchbarComponent/SearchBar'
import { Box,
         Button,
         Center,
         chakra,
         Heading,
         Image,
         Stack,
         Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import FilterButtons from './../FilterButtons';

const FrontPage = () => {
  // react hook
  const [location, setLocation] = useState('');

  // to handle location change
  const handleChange = (e) => setLocation(e.target.value);

    return (

        <Box m="auto"
             my="10"
             p="20"
             w="70%"
             borderRadius="20px">
            <Center>
                <Box>
                    <Image m="auto"
                           mb="20"
                           borderRadius="full"
                           src="https://dummyimage.com/200x200/#b4b9c/fff"
                           alt=""></Image>
                    <Heading fontSize="4rem"
                             m="auto"
                             mb="5"
                             color="white">Popular <chakra.span color="teal.300">Languages</chakra.span></Heading>
                    <Text color="white"
                          align="center"
                          fontSize="lg"
                          mb="10"
                          >Find popular programming languages and frameworks near you</Text>
                    <SearchBar handleChange={handleChange} />

                    <FilterButtons colNum={5} />
                </Box>
            </Center>
        </Box>

    );
}

export default FrontPage;