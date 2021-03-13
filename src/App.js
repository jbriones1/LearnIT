import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import ApexChart from './components/ApexChart'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign='center' fontSize='xl'>
        <Grid minH='100vh' p={3}>
          <VStack spacing={8}>
            <Text>
              Edit <Code fontSize='xl'>src/App.js</Code> and save to reload.
            </Text>
            <Link
              color='teal.500'
              href='https://chakra-ui.com'
              fontSize='2xl'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn Chakra
            </Link>
            <ApexChart
              typeGraph="bar"
            />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
