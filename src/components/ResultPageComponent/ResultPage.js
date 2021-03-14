import React, {useEffect} from 'react'
import SearchBar from '../SearchbarComponent/SearchBar'
import { Box,
         Button,
         Center,
         chakra,
         Heading,
         Stack,
         Text,
        } from '@chakra-ui/react'
//import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import FilterButtons from '../FilterButtons';
import ApexChart from './../ApexChart';

const ResultPage = props => {
  // react hook
  const [location, setLocation] = useState(props.location);

  // to handle location change
  const handleChange = (e) => setLocation(e.target.value);

  const handleScrollTop = () => {
      window.scrollTo(0,0);
  }
    return (
        <>
        <Center mt={10}>   
            <Stack
            isInline
            spacing="8rem">
                <Box>
                    <Text
                        color="white"
                        align="left"
                        fontSize="lg"
                        mb="5"
                        >Find your location:
                    </Text>
                    <SearchBar handleChange={handleChange} />
                    <Stack  my="5"
                            align="center">
                    </Stack>
                    <FilterButtons colNum={2} />
                </Box>
                
                <Box>
                <Heading fontSize="3rem"
                             m="auto"
                             mb="5"
                             color="white">Results for: <chakra.span color="teal.300">{location}</chakra.span></Heading>
                    <ApexChart typeChart="bar"/>
                </Box>
            </Stack>
        </Center>
        
        <Box 
        bg="teal" color="white" w="6em" h="6em" position="fixed" right="30px" bottom="30px" z-index="1" borderRadius="full"
        onClick={handleScrollTop}
        >
            <Text
        color="white"
        align="center"
        fontSize="lg"
        mt="6"
        onClick={handleScrollTop}
        >Scroll to Top
    </Text></Box>
        
        
        </>

    );
}

export default ResultPage;