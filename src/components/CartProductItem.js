import React, { memo } from 'react';

// const areEqual = (prevProps, nextProps) => {
//     console.log(prevProps.cartItem.product.id === nextProps.cartItem.product.id);
//     console.log(prevProps.handleDelete === nextProps.handleDelete);
//     return prevProps.cartItem.product.id === nextProps.cartItem.product.id && prevProps.handleDelete === nextProps.handleDelete;
//   };

const CartProductItem = memo(({cartItem, handleDelete, handleModification}) => {
    console.log("CartProductItem --");
    return (
        <div className='card p-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <img className='cart-product-image' src={cartItem.product.thumbnail} alt={cartItem.product.title} />
                    <div className='ms-2'>
                        <h6>{cartItem.product.title}</h6>
                        <h6>${cartItem.product.price}</h6>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleModification(cartItem, 1)} className='btn btn-sm btn-primary'><i className="bi bi-plus"></i></button>
                    <span className='mx-2'>{cartItem.quantity}</span>
                    <button onClick={() => handleModification(cartItem, -1)}  className='btn btn-sm btn-primary'><i className="bi bi-dash"></i></button>
                </div>
                <div>
                    <button onClick={() => handleDelete(cartItem)} className='btn btn-sm btn-danger'><i className="bi bi-trash"></i></button>
                </div>
            </div>
        </div>
    );
});

export default CartProductItem;