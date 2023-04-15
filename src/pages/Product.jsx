import React, { Fragment } from "react";
import CategoryNav from "../components/CategoryNav";
import ProductSlider from "../components/ProductSlider";
import classes from "./Product.module.scss";
import  MainProduct from "../components/MainProduct";

const Product = () => {
  return (
    <Fragment>
      <CategoryNav />
      <MainProduct/>
      <div className={classes.container}>
        <h1>Similar Products</h1>
        <p>You may like these products also</p>
      </div>
      <ProductSlider />
    </Fragment>
  );
};

export default Product;
