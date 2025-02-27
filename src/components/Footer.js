import React from "react";
import "../styles/Footer.css"; // Import styles

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Furniture Store. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
