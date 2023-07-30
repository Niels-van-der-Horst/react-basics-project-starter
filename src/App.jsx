import { Center, Heading, Text, } from '@chakra-ui/react';
import { portfolioData } from './utils/data';
import { useState } from 'react';
import { PortfolioItemPage } from './pages/PortfolioItemPage';
import { PortfolioPage } from './pages/PortfolioPage';

export const App = () => {
  
  
  const items = portfolioData.hits;  

  
  const [selectedItem] = useState(false);
  



  

  return (

    <>
    <Center h="100vh" flexDir="collumn">
      <Heading>Recipes @ hand <Text style={{fontSize: "18px"}} as="div">with all the <br /> freshness of the land</Text>
      </Heading>
    </Center>
   {selectedItem ? <PortfolioItemPage item={selectedItem} /> : <PortfolioPage items={items}/>}
    </> 

  );
};



  //Object.entries(items).map((album) => console.log(album)); 
  
  //console.log(typeof album);
