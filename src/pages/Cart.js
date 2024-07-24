import React, { useCallback, useContext } from "react";
import CartContext from "../contexts/CartContext";
import CartProductItem from "../components/CartProductItem";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const deleteItem = useCallback((item) => {
    setCart((prevCart) => {
        const newcart  =  prevCart.filter(element => element.product.id !== item.product.id);
        localStorage.setItem("cart", JSON.stringify(newcart));
        return newcart;
    })
  }, [setCart]);

  const modifyQuantity = useCallback((item, increment) => {
    if(item.quantity + increment === 0) {
        return deleteItem(item);
    }
    setCart((prevCart) => {
        const newcart = prevCart.map((element) => {
            if(element.product.id === item.product.id) {
                return {
                    ...element,
                    quantity: element.quantity + increment
                }
            }
            return element;
        });
        localStorage.setItem("cart", JSON.stringify(newcart));
        return newcart;
    })
  }, [setCart, deleteItem]);

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="w-50">
        <h1>Your cart</h1>
        {cart.length === 0 && <p>Your cart is empty</p>}
        <div className="">
          {cart.map((item, index) => {
            return (
              <div key={index} className="mb-3">
                <CartProductItem cartItem={item} handleDelete={deleteItem} handleModification={modifyQuantity} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;