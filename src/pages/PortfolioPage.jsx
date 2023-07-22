import './PortfolioPage.css';
import { PortfolioItemPage } from './PortfolioItemPage';

export const PortfolioPage = ({items = [] }) => {
    
    
    console.log(typeof items)
    
    return ( 
        
        <>
        <h1>Test</h1>
        console.log(typeof items)
        {items.map((album) => (
            <PortfolioItemPage key={album.id} album={album} />
        ))}
        </>
       
    );     
};