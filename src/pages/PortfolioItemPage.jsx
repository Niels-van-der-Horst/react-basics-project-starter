import './PortfolioItemPage.css';
import  { Heading } from '@chakra-ui/react';

export const PortfolioItemPage = ({item, setTrackItem}) => {
    
const clickHandler = (clickFn) => {
    setTrackItem(true);
    console.log('click');

};

    return (
        
        <>
        <div className="recipePage">
        <Heading>{item.recipe.label}</Heading>
        <img src={item.recipe.image} onClick={clickHandler} />
        <p>{item.recipe.url}</p>
        </div>
        </>

    );
};


