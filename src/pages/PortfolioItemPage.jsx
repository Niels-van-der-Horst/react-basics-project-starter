import './PortfolioItemPage.css';
import  { Heading } from '@chakra-ui/react';

export const PortfolioItemPage = ({item}) => {
    


    return (
        <>
        <div className="recipePage">
        <Heading>{item.recipe.label}</Heading>
        <img src={item.recipe.image} />
        <p>{item.recipe.url}</p>
    </div>
        </>

    );
};