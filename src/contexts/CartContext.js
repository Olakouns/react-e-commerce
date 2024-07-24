import { createContext } from "react";

// let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : 

const CartContext = createContext(localStorage.getItem('cart'));

export default CartContext;