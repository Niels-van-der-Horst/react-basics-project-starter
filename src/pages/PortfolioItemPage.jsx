import './PortfolioItemPage.css';
import  { Heading } from '@chakra-ui/react';

export const PortfolioItemPage = ({album}) => {
    


    return (
        <>
        <div className="recipePage">
        <Heading>{album.recipe.label}</Heading>
        <img src={album.recipe.image} />
        <p>{album.recipe.url}</p>
        </div>
        </>

    );
};