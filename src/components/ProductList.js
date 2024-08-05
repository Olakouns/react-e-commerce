import React, { memo, useCallback, useContext } from "react";
import ProductItem from "./ProductItem";
import CartContext from "../contexts/CartContext";
import { toast } from "react-toastify";
import { Toast } from "bootstrap";

const ProductList = memo(({ products }) => {
  console.log("ProductList --");
  // const {setCart} = useContext(CartContext); 

  // const addToCart = useCallback((product) => {
  //   setCart((prevCart) => {
  //       let index = prevCart.findIndex((item) => item.product.id === product.id);
  //       if(index !== -1) {
  //           const newCart = [...prevCart];
  //           newCart[index].quantity += 1;
  //           localStorage.setItem("cart", JSON.stringify(newCart));
  //           return newCart ;
  //       }
  //       localStorage.setItem("cart", JSON.stringify([...prevCart, {product, quantity: 1}]));
  //     return [...prevCart, {product, quantity: 1}];
  //   });
  //   toast(`Added ${product.title} to cart`);
  // }, [setCart]);

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-md-3 mb-4">
            <ProductItem product={product} />
            {/* <ProductItem handlerAddToCart={addToCart} product={product} /> */}
          </div>
        );
      })}
    </div>
  );
});

export default ProductList;
