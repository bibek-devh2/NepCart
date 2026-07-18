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
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  if (!product) {
    return (
      <div className="not-found">
        <p>Product not found.</p>
        <Link to="/products">← Back to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addToCart({ ...product, selectedSize });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="product-detail">
      <Link to="/products" className="back-link">← Back to Products</Link>

      <div className="detail-grid">
        {/* Images */}
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

        {/* Info */}
        <div className="detail-info">
          <p className="detail-category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="detail-price">Rs. {product.price}</p>
          <p className="detail-description">{product.description}</p>

          {/* Size selector — only shows if product has sizes */}
          {product.sizes && (
            <div className="size-section">
              <p className="size-label">
                Select Size
                {sizeError && <span className="size-error"> — Please select a size</span>}
              </p>
              <div className="size-options">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button className="detail-add-btn" onClick={handleAddToCart}>
            {added ? "Added to Cart ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </section>
  );
}