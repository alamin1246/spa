import React from 'react';
import { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("fuel_products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    const addToCart = (product) => {
        const exist = cart.find(cartItem => cartItem.id === product.id)
        if (exist) {
            alert("This Product is already added ")
            return;
        }
        if (cart.length === 4) {
            alert("Not added products more than")
            return;
        }
        const newCartItem = product;
        const newCart = [...cart, newCartItem]
        setCart(newCart)
    }
    return (
        <div className='shop'>
            <div className="products-container">
                {products.map(product => <Products
                    product={product}
                    key={product.id}
                    addToCart={addToCart}
                ></Products>)}
            </div>
            <div className="cart-container">
                <Cart
                    cartItems={cart}
                    setCart={setCart}
                ></Cart>
            </div>
        </div >
    );
};

export default Shop;
