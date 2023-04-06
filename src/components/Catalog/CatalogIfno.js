import { Link } from'react-router-dom';
import '../AllHeroes.css'

export const CatalogInfo = ({
    _id,
    title,
    imageUrl,
    category,
}) => {
    
    return (
        <div className="allHeroes">
            <div className="allHeroes-info">
                <img src={imageUrl} alt='' />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/catalog/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
};