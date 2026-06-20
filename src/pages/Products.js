import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Products() {
  return (
    <section className="product-section">
      <h2>All Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}