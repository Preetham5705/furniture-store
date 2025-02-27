import React from "react";
import "../styles/styles.css";
import aboutImage from "../assets/albero-furniture-bratislava-D3r0iKZ8YxE-unsplash.jpg"; // Ensure this path is correct

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h3>ABOUT OUR FURNITURE</h3>
        <p>
          Our multifunctional collection blends design and function to suit your individual taste. Make each room unique or pick a cohesive theme that best expresses your interests.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="Furniture collection" />
      </div>
    </section>
  );
}

export default About;
