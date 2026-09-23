import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Leaf, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";


export default function Navbar() {

  const totalItems = useSelector((state) =>
    state.cart.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    )
  );


  const navClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;


  return (
    <header className="navbar">

      <Link
        to="/"
        className="brand"
      >

        <span className="brand-mark">
          <Leaf size={21} />
        </span>

        <span>
          Paradise <strong>Nursery</strong>
        </span>

      </Link>


      <nav className="nav-links">

        <NavLink
          to="/"
          className={navClass}
        >
          Home
        </NavLink>


        <NavLink
          to="/plants"
          className={navClass}
        >
          Plants
        </NavLink>


        <NavLink
          to="/about"
          className={navClass}
        >
          About Us
        </NavLink>


        <NavLink
          to="/cart"
          className={navClass}
        >

          <span className="cart-nav">

            <ShoppingCart size={19} />

            Cart

            <span className="cart-count">
              {totalItems}
            </span>

          </span>

        </NavLink>

      </nav>

    </header>
  );
}