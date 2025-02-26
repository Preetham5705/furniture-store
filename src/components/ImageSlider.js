import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./ImageSlider.css"; // Custom styles

const images = [
  "/images/marcus-loke-nii8BZlJfOY-unsplash.jpg",
  "/images/albero-furniture-bratislava-75yyUu7BVlo-unsplash.jpg",
  "/images/unrecognizable-black-female-customer-choosing-furniture-shopping-center.jpg",
];

const ImageSlider = () => {
  return (
    <div className="slider-container">
      <Swiper navigation={true} modules={[Navigation]} className="image-slider">
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
