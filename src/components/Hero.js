import React from "react";
import "../styles/styles.css";
import heroImage from "../assets/virender-singh-hE0nmTffKtM-unsplash.jpg"; // Ensure this path is correct

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="Modern furniture setup" />
      </div>
      <div className="hero-content">
        <h2>Discover innovative ways to decorate</h2>
        <p>
          We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.
        </p>
        <button className="shop-btn">SHOP NOW →</button>
      </div>
    </section>
  );
}

export default Hero;
