import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ImageSlider from "./components/ImageSlider";

function App() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ImageSlider />
            <AboutSection />
        </>
    );
}

export default App;
