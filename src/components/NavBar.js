import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import { useSelector } from "react-redux";

function NavBar(props) {
  const cart = useSelector((state) => state.cartReducer)
  // const {cart} = useContext(CartContext);
  console.log("NavBar --"); 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {" "}
            Navbar{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> 
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {" "}
                  Home{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products/12">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
            </ul>
            <Link to="/cart" type="button" className="btn btn-light position-relative">
              <i className="bi bi-cart-dash"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
