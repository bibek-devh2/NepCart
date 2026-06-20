import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return <div className="cart-empty">Your cart is empty.</div>;
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.images} alt={item.name} />
          <div className="cart-item-info">
            <h4>{item.name}</h4>
            <p>Rs. {item.price}</p>
            <div className="cart-qty">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          </div>
          <button className="cart-remove" onClick={() => removeFromCart(item.id)}>✕</button>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: Rs. {cartTotal}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}