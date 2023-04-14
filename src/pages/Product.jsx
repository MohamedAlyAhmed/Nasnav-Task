import { Fragment } from "react";
import CategoryNav from "../components/CategoryNav";
import ProductOne from "../components/ProductOne";
import ProductSlider from "../components/ProductSlider";
import classes from "./Product.module.scss";

const Product = () => {
  return (
    <Fragment>
      <CategoryNav />
      <ProductOne />
      <div className={classes.container}>
        <h1>Similar Products</h1>
        <p>You may like these products also</p>
      </div>
      <ProductSlider />
    </Fragment>
  );
};

export default Product;
