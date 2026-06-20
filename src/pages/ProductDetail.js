import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [mainImage, setMainImage] = useState(product ? product.images[0] : "");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="not-found">
        <p>Product not found.</p>
        <Link to="/products">← Back to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="product-detail">
      <Link to="/products" className="back-link">← Back to Products</Link>

      <div className="detail-grid">
        <div className="detail-images">
          <img src={mainImage} alt={product.name} className="main-image" />
          <div className="thumbnail-row">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} view ${index + 1}`}
                className={`thumbnail ${img === mainImage ? "active" : ""}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="detail-info">
          <p className="detail-category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="detail-price">Rs. {product.price}</p>
          <p className="detail-description">{product.description}</p>
          <button className="detail-add-btn" onClick={handleAddToCart}>
            {added ? "Added! ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </section>
  );
}