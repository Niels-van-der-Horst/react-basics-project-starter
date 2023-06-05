import { Center, Heading, Text, color } from '@chakra-ui/react';
import { portfolioData } from './utils/data';
import { useState } from 'react';
import { PortfolioItemPage } from './pages/PortfolioItemPage';
import { PortfolioPage } from './pages/PortfolioPage';

export const App = () => {
  
  const [selectedItem, ] = useState(portfolioData.hits[3]);
   
  

  return (
    <>
    <Center h="100vh" flexDir="collumn">
      <Heading>Recipes @ hand <Text style={{fontSize: "18px"}} as="div">with all the <br /> freshness of the land</Text>
      </Heading>
    </Center>
    {selectedItem ? <PortfolioItemPage item={selectedItem} /> : <PortfolioPage />}
    </>
  );
};


