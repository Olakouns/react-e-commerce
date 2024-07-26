import { useParams, useSearchParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

function ProductDetails() {
  // let [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('name'));
  let { productId } = useParams();
  const [product, loading, error] = useFetchData(
    `${process.env.REACT_APP_API_URL}/products/${productId}`
  );

//   useEffect(() => {
//     console.log(product);
//   }, [product]);

  return (
    <div>
      <h1>Product Details</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
