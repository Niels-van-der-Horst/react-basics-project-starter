import './PortfolioPage.css';
import { PortfolioItemPage } from './PortfolioItemPage';

export const PortfolioPage = ({item}) => {
    


    return (
        
        <>
        <h1>Test</h1>

        {item.map((album) => (
            <PortfolioItemPage key={album.id} album={album} />
        ))}
        </>
       
    );     
};