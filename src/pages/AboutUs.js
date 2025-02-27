import React from "react";
import "../styles/AboutUs.css"; 

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-hero">
                <h1>Crafting Elegance, One Piece at a Time</h1>
                <p>Where Timeless Design Meets Modern Luxury</p>
            </div>

            <div className="about-content">
                <div className="about-text">
                    <h2>Our Story</h2>
                    <p>
                        Every masterpiece begins with a vision. At **[Your Store Name]**, we don’t just build furniture; 
                        we craft emotions, memories, and elegance. Rooted in a tradition of excellence, our journey began with a simple yet 
                        powerful idea – to blend artistry with comfort. Today, we stand as a beacon of sophistication, where each piece tells 
                        a story of passion and craftsmanship.
                    </p>

                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>🌟 Handcrafted with Perfection</li>
                        <li>🌍 Sustainably Sourced Materials</li>
                        <li>🏡 Designs That Elevate Your Home</li>
                        <li>💎 Timeless Elegance & Durability</li>
                    </ul>
                </div>
                
                <div className="about-image"></div>
            </div>
        </div>
    );
};

export default AboutUs;
