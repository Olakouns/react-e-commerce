import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function ProductDetails() {
    let { productId } = useParams();
    // let [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('name'));
    return (
        <div>
            <h1>Product Details</h1>
            <p>{productId}</p>
        </div>
    );
}

export default ProductDetails;