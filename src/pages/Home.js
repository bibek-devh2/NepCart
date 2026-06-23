import { Link } from "react-router-dom";
import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Step Into Style with Nepcart</h1>
        <p>Quality shoes for every occasion, delivered across Nepal.</p>
          <Link to="/products" className="hero-btn">Shop Now →</Link>
      </section>

      <section className="why-section">
  <div className="why-card">
    <span>🚚</span>
    <h4>Fast Delivery</h4>
    <p>Dispatched within 24 hours across Nepal.</p>
  </div>
  <div className="why-card">
    <span>🔁</span>
    <h4>Easy Returns</h4>
    <p>7-day hassle-free exchange policy.</p>
  </div>
  <div className="why-card">
    <span>💳</span>
    <h4>Cash on Delivery</h4>
    <p>Pay when your order arrives at your door.</p>
  </div>
</section>

      <section className="product-section">
        <h2>Featured Shoes</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}