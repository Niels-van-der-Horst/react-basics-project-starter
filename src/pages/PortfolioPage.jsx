import './PortfolioPage.css';
import { PortfolioItemPage } from '../pages/PortfolioItemPage'

export const PortfolioPage = ({item}) => {

    return (
        <>
        <h1>Test</h1>
        {item.recipe.label.map((album) => (
            <PortfolioItemPage key={album.id} album={album} />
        ))}
        </> 
    );     
};