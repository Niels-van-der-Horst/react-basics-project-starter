import './PortfolioPage.css';
import { PortfolioItemPage } from './PortfolioItemPage';

export const PortfolioPage = ({items, clickFn}) => {
    
    


    return ( 
        
        <>
        {Object.values(items).map((item)  => (
            
            <PortfolioItemPage key={item.id} item={item} />
        ))}
        </>
       
    );     
};

