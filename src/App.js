import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CartContext from "./contexts/CartContext";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <div className="container mt-3">
            <Outlet />
          </div>
        </div>
      </Provider>
      {/* <CartContext.Provider
        value={{
          cart,
          setCart,
        }}
      > */}
      {/* </CartContext.Provider> */}
      <ToastContainer />
    </>
  );
}

export default App;
