import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <section className="about-page">
      {/* Hero intro */}
      <div className="about-hero">
        <h1>Built for Every Step You Take</h1>
        <p>
          Nepcart started with a simple idea — Nepal deserves an online shoe
          store that actually delivers on its promises. Quality footwear,
          honest prices, and real people behind every order.
        </p>
        <Link to="/products" className="about-cta">Shop Our Collection</Link>
      </div>

      {/* Stats row */}
      <div className="about-stats">
        <div className="stat">
          <h3>15+</h3>
          <p>Styles Available</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Quality Checked</p>
        </div>
        <div className="stat">
          <h3>24h</h3>
          <p>Dispatch Time</p>
        </div>
        <div className="stat">
          <h3>7</h3>
          <p>Day Easy Returns</p>
        </div>
      </div>

      {/* Our story */}
      <div className="about-story">
        <h2>Our Story</h2>
        <p>
          Nepcart began as a small project with one goal: make it easy for
          people across Nepal to find shoes they'd actually be proud to wear —
          without the guesswork of online shopping. No vague photos, no
          surprise quality, no disappearing customer support.
        </p>
        <p>
          Every pair on this site is picked, checked, and packed with care.
          Whether you need something sharp for the office, comfortable for a
          long walk, or sporty for your morning run, Nepcart is built to get
          it to your door — reliably, and on time.
        </p>
      </div>

      {/* Founder note */}
      <div className="founder-note">
        <p className="quote">
          "I built Nepcart because I wanted online shopping for shoes in
          Nepal to feel personal again — like buying from someone who
          actually cares whether the shoes fit right and arrive on time."
        </p>
        <p className="founder-name">— Bibek, Founder of Nepcart</p>
      </div>

      {/* Values */}
      <div className="about-values">
        <Link to="/products" className="value-card">
          <h4>🚚 Fast Delivery</h4>
          <p>Dispatched within 24 hours, tracked every step.</p>
        </Link>

        <Link to="/products" className="value-card">
          <h4>✅ Quality Checked</h4>
          <p>Every pair inspected before it ships to you.</p>
        </Link>

        <a href="https://wa.me/9779825395584" target="_blank" rel="noreferrer" className="value-card">
          <h4>💬 Real Support</h4>
          <p>Reach us directly on WhatsApp or Facebook anytime.</p>
        </a>
      </div>
    </section>
  );
}