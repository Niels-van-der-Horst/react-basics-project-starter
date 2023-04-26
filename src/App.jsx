import { Center, Heading } from '@chakra-ui/react';
import { portfolioData } from './utils/data';
import { useState } from 'react';
import { PortfolioItemPage } from './pages/PortfolioItemPage';
import { PortfolioPage } from './pages/PortfolioPage';

export const App = () => {
  
  const [selectedItem, ] = useState(portfolioData.hits[0]);
   


  return (
    <>
    <Center h="100vh" flexDir="collumn">
      <Heading>Your Recipe App</Heading>
    </Center>
    {selectedItem ? <PortfolioItemPage item={selectedItem} /> : <PortfolioPage />}
    </>
  );
};


