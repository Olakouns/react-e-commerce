import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
      addProduct: (state, action) => {
        state.push({
            product: action.payload,
            quantity: 1
        }) // add product to cart
      },
      removeProduct: (state, action) => {
        state = state.filter(element => element.product.id !== action.payload.id)
      },
      incrementProductQuantity: (state, action) => {
        state = state.map(element => {
            if(element.product.id === action.payload.id) {
                return {
                    ...element,
                    quantity: element.quantity + 1
                }
            }
            return element;
        });
      },
      decrementProductQuantity: (state, action) => {
        state = state.map(element => {
            if(element.product.id === action.payload.id) {
                return {
                    ...element,
                    quantity: element.quantity - 1
                }
            }
            return element;
        })
      },
    },
  })

export const { addProduct, removeProduct, incrementProductQuantity, decrementProductQuantity } = cartSlice.actions

export default cartSlice.reducer