import React from 'react';
import Skeleton from 'react-loading-skeleton';
// from : PRODUCT | CART | ORDER
function Loader({from}) {
    return (
        <div>
            <Skeleton count={5} /> 
        </div>
    );
}

export default Loader;