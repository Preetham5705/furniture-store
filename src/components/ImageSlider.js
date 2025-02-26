import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./ImageSlider.css"; // Custom styles

const ImageSlider = () => {
  const images = [
    "C:\Users\HP\Downloads\marcus-loke-nii8BZlJfOY-unsplash.jpg",
    "C:\Users\HP\Downloads\albero-furniture-bratislava-75yyUu7BVlo-unsplash.jpg",
    "C:\Users\HP\Downloads\unrecognizable-black-female-customer-choosing-furniture-shopping-center.jpg",
  ];

  return (
    <Swiper navigation={true} modules={[Navigation]} className="image-slider">
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
