import React from "react";
import { NavLink } from "react-router-dom"; // ✅ Use NavLink for navigation
import "../styles/styles.css";

function Navbar() {
  return (
    <>
      {/* Marquee Section */}
      <div className="marquee">
        <span>Design creates culture. Culture shapes values. Values determine the future</span>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">FurnitureCo</div>
        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""}>Shop</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        </ul>
        <div className="nav-icons">
          <NavLink to="#"><i className="fas fa-search"></i></NavLink>
          <NavLink to="#"><i className="fas fa-shopping-cart"></i></NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
