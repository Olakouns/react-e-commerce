import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPage";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

const routerPath = createBrowserRouter([
    {
      path: "",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '',
            element: <Products />,
        },
        {
            path: 'products/:productId',
            element: <ProductDetails />,
        },
        {
            path: 'cart',
            element: <Cart />,
        }
      ]
    }
]); 

export default routerPath;