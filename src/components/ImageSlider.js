import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./ImageSlider.css"; // Custom styles
import { Autoplay } from "swiper/modules";
const images = [
  "https://img.freepik.com/free-photo/unrecognizable-black-female-customer-choosing-furniture-shopping-center_657883-235.jpg?uid=R177869332&ga=GA1.1.1095606807.1734626257&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/modern-comfortable-living-room-with-elegant-decoration-lighting-generated-by-artificial-intelligence_24640-131378.jpg?uid=R177869332&ga=GA1.1.1095606807.1734626257&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/vintage-modern-restaurant-with-full-comfort_140725-9761.jpg?uid=R177869332&ga=GA1.1.1095606807.1734626257&semt=ais_hybrid",
];

const ImageSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
  navigation={true}
  modules={[Navigation, Autoplay]}
  autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto slide every 3 sec
  className="image-slider"
>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
