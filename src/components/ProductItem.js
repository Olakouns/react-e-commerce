import { memo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const ProductItem = memo(({ product, handlerAddToCart }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  console.log("ProductItem " + product.id);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const addToCart = (event) => {
    event.stopPropagation();
    handlerAddToCart(product);
  }

  const goToDetail = () => {
    navigate(`/products/${product.id}`);
  }
  return (
    <div className="card cursor-pointer" onClick={goToDetail}>
      {/* {isLoading && <Skeleton className="card-image" count={1} />}
      <img
        style={{ display: isLoading ? "none" : "block" }}
        className="card-image card-img-top"
        onLoad={handleImageLoad}
        alt={product.title}
        src={product.images[0]}
      /> */}

      <div className="card-body">
        <h6 className="card-title">{product.title}</h6>
        <span className="fw-bold text-primary">${product.price}</span>
        <div className="mb-2">
          {product.tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="badge rounded-pill text-bg-secondary me-2"
              >
                ${tag}
              </span>
            );
          })}
        </div>
        <div className="d-flex justify-content-end">
          <button onClick={addToCart} className="btn btn-sm btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
});

export default ProductItem;
