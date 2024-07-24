import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

const Cart = () => {
    const {cart} = useContext(CartContext);
    return (
        <div>
            <h1>Cart page</h1>
            {
                cart.length === 0 && <p>Your cart is empty</p>
            }
            <div>
                {cart.map((item, index) => {
                    return <div key={index}>
                        <h3>{item.product.title}</h3>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Cart;