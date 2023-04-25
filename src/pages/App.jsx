import { Center, Heading } from '@chakra-ui/react';
// import { data } from './utils/data';
import { useState } from 'react';
// import { PortfolioItemPage } from './pages/PortfolioItemPage';

export const App = () => {
  
  // const [selectedItem, SetSelectedItem] = useState();
   
  // const item = selectedItem;

  return (
    <>
    <Center h="100vh" flexDir="collumn">
      <Heading>Your Recipe App</Heading>
    </Center>
    {/* <PortfolioItemPage Title={item.title} Discription={item.discription} Image={item.imageUrl} /> */}
    </>
  );
};


