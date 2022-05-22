import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Products = ({ product, addToCart }) => {
    const { name, price, img, weight } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="info">
                <h5>Product Name: {name}</h5>
                <p>Price: Tk.{price}</p>
                <p><small>Weight: {weight}</small></p>
            </div>
            <div className='btn-container'>
                <button onClick={() => addToCart(product)} className="no-select"><span className="text">Add To Cart</span>
                <span className="icon">
                    <FontAwesomeIcon icon={faShoppingBasket} />
                </span>
                </button>
            </div>
        </div>
    );
};

export default Products;