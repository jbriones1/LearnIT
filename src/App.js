import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';

// customized components
import FrontPage from './components/FrontpageComponent/FrontpageComponent';

function App() {

  return (
    <ChakraProvider>
      <FrontPage />
    </ChakraProvider>
  );
}

export default App;
