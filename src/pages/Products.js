import { useEffect, useMemo, useState } from "react";
import { GetProducts } from "../services/ProductsService";
import Loader from "../components/Loader";
import ProductList from "../components/ProductList";
import { filterProducts } from "../utils/utils";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const productsMemo = useMemo(() => {
    return filterProducts(search, products);
  }, [products, search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetProducts();
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const getProductLoader = () => {
    console.log("Loader");
    let loader = [];
    for (let i = 0; i < 12; i++) {
      loader.push(
        <div key={i} className="col-md-3 mb-4">
          <Loader from="PRODUCT" />
        </div>
      );
    }
    return loader;
  }; 

  return (
    <>
      <h4>Products</h4>
      <div className="d-flex justify-content-center mb-3">
        <input className="form-control w-50" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        {loading ? (
          <div className="row">{getProductLoader()}</div>
        ) : (
          <ProductList products={productsMemo} />
        )}
      </div>
    </>
  );
}

export default Products;
