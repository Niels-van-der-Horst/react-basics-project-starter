import { Center, Heading, Text, } from '@chakra-ui/react';
import { portfolioData } from './utils/data';
import { useState } from 'react';
//import { PortfolioItemPage } from './pages/PortfolioItemPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { RecipePage } from './pages/RecipePage';
import { PortfolioItemPage } from './pages/PortfolioItemPage';

export const App = () => {
  
  
  const items = portfolioData.hits;  

  
  const [trackitem, setTrackItem] = useState(true);

  const SelectedItem = (newMessage) => {
    setTrackItem(newMessage); 
  }


  

  return (

    <>
    <Center h="100vh" flexDir="collumn">
      <Heading>Recipes @ hand <Text style={{fontSize: "18px"}} as="div">with all the <br /> freshness of the land</Text>
      </Heading>
    </Center>
      {trackitem ? <RecipePage item={trackitem} SelectedItem={SelectedItem} /> : <PortfolioPage items={items}/>}
    </> 

  );
};



  //Object.entries(items).map((album) => console.log(album)); 
  
  //console.log(typeof album);
