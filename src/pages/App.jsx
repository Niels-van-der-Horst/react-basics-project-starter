import { Center, Heading } from '@chakra-ui/react';
import { data } from './utils/data';
import { useState } from 'react';
import { PortfolioItemPage } from './pages/PortfolioItemPage';

export const App = () => {
  
  const [selectedItem, SetSelectedItem] = useState(data[0]);
  
  return (
    <>
    <Center h="100vh" flexDir="collumn">
      <Heading>Your Recipe App</Heading>
    </Center>
    <PortfolioItemPage selectedItem/>
    </>
  );
};

