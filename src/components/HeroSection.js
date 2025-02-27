import React from "react";
import { Link } from "react-router-dom";
import "../styles/heroStyles.css"; // Ensure this CSS file is properly linked

const HeroPage = () => {
  return (
    <div>
      {/* Marquee Banner */}
      <div className="marquee">
        <span>Design creates culture. Culture shapes values. Values determine the future</span>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">FurnitureCo</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Elevate Your Space with Timeless Furniture</h1>
          <p>Discover a collection of elegant and modern furniture designed to bring comfort and style to your home.</p>
          <Link to="/shop" className="shop-now">Shop Now</Link>
        </div>
        <div className="hero-image"></div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-text">
          <h2>About Our Furniture</h2>
          <p>Our multifunctional collection blends design and function to suit your taste.</p>
        </div>
        <div className="about-image"></div>
      </section>
    </div>
  );
};

export default HeroPage;
