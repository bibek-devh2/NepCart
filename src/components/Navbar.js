import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/images/logo.png" alt="Nepcart" />
      </Link>
      <div className="navbar-links">
  <Link to="/">Home</Link>
  <Link to="/products">Products</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</div>
      <Link to="/cart" className="navbar-cart">
        🛒 <span className="cart-count">{cartCount}</span>
      </Link>
    </nav>
  );
}