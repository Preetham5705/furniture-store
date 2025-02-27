import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";  
import About from "./components/About"; 
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ShopPage from "./pages/ShopPage";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router> {/* ✅ Removed basename for local development */}
            <div>
                <Navbar /> {/* ✅ Navbar is always visible */}

                <Routes>
                    <Route path="/" element={<><Hero /><ImageSlider /><About /></>} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
