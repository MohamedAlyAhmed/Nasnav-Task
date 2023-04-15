import React from "react";
import classes from "./ProductSlider.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ProductCard from "./ProductCard";
import { DUMMY_PRODUCT } from "../services/DummyProducts";

const ProductSlider = () => {
  const productCard = DUMMY_PRODUCT.map((product) => (
    <SwiperSlide key={product.id}>
      <ProductCard data={product} />
    </SwiperSlide>
  ));

  return (
    <div className={classes.container}>
      <Swiper
        spaceBetween={90}
        slidesPerView={4}
      >
        {productCard}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
