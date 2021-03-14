import React from 'react';
import SearchBar from '../SearchbarComponent/SearchBar';
import {
  Box,
  Center,
  chakra,
  Heading,
  Image,
  Text,
  Stack,
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import FilterButtons from '../FilterButtons';
import Logo from './../../images/angle.png';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import ApexChart from '../ApexChart';

const FrontPage = () => {
  // react hook
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <>
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
              Learn<chakra.span color='teal.300'>IT</chakra.span>
            </Heading>

            <Text color='white' align='center' fontSize='lg' mb='10'>
              Find popular programming languages and frameworks near you
            </Text>
            <SearchBar
              handleChange={handleChange}
              submitSearch={submitSearch}
              location={location}
            />

            <Stack my='10' align='center'>
              <Button
                backgroundColor='teal.100'
                color='black'
                w='250px'
                h='50px'
                borderRadius='15px'
                p='7'
                fontSize='xl'
                rightIcon={<ArrowForwardIcon />}
                onClick={(e) => onOpen()}
              >
                Get Started
              </Button>
            </Stack>

            <FilterButtons
              colNum={5}
              handleClick={handleClick}
              techFilter={techFilter}
            />
          </Box>
        </Center>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
        onClose={onClose}
        isCentered={true}
        mt='10'
        scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent py='10' width='600px' m='auto' backgroundColor='#262d47'>
          <ModalCloseButton color='white' />
          <ModalBody>
            <Center>
              <ApexChart
                location={location.replace(/(\s|\t)*,(\s|\t)*/g, ',')}
                techFilter={techFilter}
              />
            </Center>
          </ModalBody>

          {/* <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}></Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default FrontPage;
