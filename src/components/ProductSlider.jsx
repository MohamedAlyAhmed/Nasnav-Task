import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import ProductCard from "./ProductCard";
import { DUMMY_PRODUCTS } from "../services/DummyProducts";
import "swiper/css";
import "swiper/css/pagination";
import classes from "./ProductSlider.module.scss";

const ProductSlider = ({ recieveId }) => {
  const recieveProductData = (id) => {
    //Receive Data From Product Card

    //Send Data For Product Page
    recieveId(id);
  };

  const productCard = DUMMY_PRODUCTS.map((product) => (
    <SwiperSlide key={product.id}>
      <ProductCard data={product} recieveProductData={recieveProductData} />
    </SwiperSlide>
  ));

  return (
    <div className={classes.container}>
      <Swiper
        spaceBetween={90}
        slidesPerView={4}
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {productCard}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
