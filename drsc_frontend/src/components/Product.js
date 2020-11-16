import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Product(props) {
    const { product } = props;
    return (
            <div key={product._id} className="card">
                
                <img className="medium" src={product.image} alt={product.name} />
                <div className="card-body">
                    <Link to={`/product/${product._id}`}></Link>
                    <Link to= {`/product/${product._id}`}>{product.name}</Link>
                        
                    <Rating rating={product.rating} numReviews={product.numReviews} />
            <div className="price">${product.price}</div>
        </div>
        </div>
    )
}


 









