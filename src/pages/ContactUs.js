import React from "react";
import "../styles/ContactUs.css"; 

const ContactUs = () => {
    return (
        <div className="contact-us">
            <h1>Let’s Create Something Extraordinary Together</h1>
            <p>We would love to hear from you!</p>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>📍 Visit Us</h2>
                    <p>123 Luxury Street, Furniture City, NY 10001</p>

                    <h2>📞 Call Us</h2>
                    <p>(+123) 456-7890</p>

                    <h2>📧 Email Us</h2>
                    <p>support@furniturestore.com</p>
                </div>

                <form className="contact-form">
                    <h2>📩 Get in Touch</h2>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="4" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
