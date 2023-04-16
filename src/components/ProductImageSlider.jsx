import React, { useState } from "react";
import Swiper from "swiper";
import { Pagination, Navigation } from "swiper";
import "swiper/css";


const ProductImageSlider = () => {
    const images = ["images/Group 333.png",'images/Group 331.png',"images/Group 329.png"]
  const [currentImage, setCurrentImage] = useState(images[0]);

  const swiperParams = {
    slidesPerView: "auto",
    spaceBetween: 1,
    direction: "horizontal",
    Navigation:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      click: (swiper, event) => {
        setCurrentImage(event.target.src);
      },
    },
  };

  const swiperRef = React.createRef();

  React.useEffect(() => {
    new Swiper(swiperRef.current, swiperParams);
  }, []);

  return (
    <div>
      <div>
        <img src={currentImage} alt="Main Image" />
      </div>
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div className="swiper-slide" key={index}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageSlider;
