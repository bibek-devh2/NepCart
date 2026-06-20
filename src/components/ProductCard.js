import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-card-link">
        <img src={product.images[0]} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
      </Link>
      <div className="product-bottom">
        <span className="product-price">Rs. {product.price}</span>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}