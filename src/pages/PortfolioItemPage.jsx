import './PortfolioItemPage.css';


export const PortfolioItemPage = ({item}) => {
    


    return (
        <>
        <div className="recipePage">
        <h1>{item.recipe.label}</h1>
        <img src={item.recipe.image} />
        <p>{item.recipe.url}</p>
    </div>
        </>

    );
};