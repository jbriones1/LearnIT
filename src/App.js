import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// customized components
import FrontPage from './components/FrontpageComponent/FrontPage';
// import ApexChart from './components/ApexChart';

function App() {
  return (
    <ChakraProvider>
      <FrontPage />
      {/* <ApexChart /> */}
    </ChakraProvider>
  );
}

export default App;
