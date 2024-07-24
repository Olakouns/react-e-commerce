import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CartContext from "./contexts/CartContext";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  return (
    <CartContext.Provider value={{
      cart,
      setCart
    }}>
      <div className="App">
        <NavBar />
        <div className="container mt-3">
          <Outlet />
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;
