import React from 'react'
import data from '../data'
import Rating from '../components/Rating'



export default function ProductScreen(props) {
    //this is the exact value that the user enters, comparing value with item
    const product = data.products.find(x => x._id === props.match.params.id)
    if (!product) {
        return <div>Product Not Found</div>
    }

    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating
                                rating={product.rating}
                                numReview={product.numReviews} />
                        </li>
                        <li>Price: ${product.price}</li>
                        <li>
                            Description: <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock>0? (
                                        <span className="success">In Stock</span>
                                        ) : (
                                        <span className="error">Unavailable</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add To Cart</button>
                            </li>
                        </ul>
                    </div>


                </div>

            </div>
        </div>
    )
}
