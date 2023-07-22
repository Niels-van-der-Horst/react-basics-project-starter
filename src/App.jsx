import { Center, Heading, Text, } from '@chakra-ui/react';
import { portfolioData } from './utils/data';
import { useState } from 'react';
import { PortfolioItemPage } from './pages/PortfolioItemPage';
import { PortfolioPage } from './pages/PortfolioPage';

export const App = () => {
  
  const [selectedItem] = useState('');
  
  const myArray = Object.entries(portfolioData) ; 
  const items = myArray;
  console.log(typeof items);

  return (


    <>
    <Center h="100vh" flexDir="collumn">
      <Heading>Recipes @ hand <Text style={{fontSize: "18px"}} as="div">with all the <br /> freshness of the land</Text>
      </Heading>
    </Center>
    {selectedItem ? <PortfolioItemPage item={selectedItem} /> : <PortfolioPage items={{items}}/>}
    </>

  );
};


