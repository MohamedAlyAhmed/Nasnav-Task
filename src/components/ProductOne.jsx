import React from "react";
import classes from "./ProductOne.module.scss";
import { MAIN_PRODUCT } from "../services/DummyMainProduct";

const ProductOne = () => {
  return (
    <main className={classes["main-product"]}>
      <section className={classes["product-imgs"]}>
        <div>
          <img src="images/main-img.PNG" alt="main product image" />
        </div>
        <div>
          <img src="images/Path 347.png" alt="arrow left" />
          <img src="images/Group 333.png" alt="product image " />
          <img src="images/Group 331.png" alt="product image " />
          <img src="images/Group 329.png" alt="product image" />
          <img src="images/Group 335.png" alt="product image" />
          <img src="images/Path 346.png" alt="arrow right" />
        </div>
      </section>

      <section className={classes["product-details"]}>
        <div className={classes["main-details"]}>
          <div>
            <img src="images/Group 346.png" alt="brand logo" />
          </div>
          <p className={classes.title}>{MAIN_PRODUCT.title}</p>
          <p className={classes.category}>{MAIN_PRODUCT.category}</p>
          <div className={classes.rate}>
            <div className={classes.star}>
              <img src="images/Path 368.png" alt="star" />
              <img src="images/Path 368.png" alt="star" />
              <img src="images/Path 368.png" alt="star" />
              <img src="images/Path 368.png" alt="star" />
              <img src="images/Path 369.png" alt="star" />
            </div>
            <p>{MAIN_PRODUCT.rate} of 5</p>
            <div>{MAIN_PRODUCT["rate-count"]} Rates</div>
          </div>
          <div className={classes.price}>
            <h2>
              {MAIN_PRODUCT.price} <span>LE</span>
            </h2>
            {MAIN_PRODUCT.disscount && <del>9.999 LE</del>}
            {MAIN_PRODUCT.disscount && <h4>{MAIN_PRODUCT.disscount}% Off</h4>}
          </div>
        </div>
        <hr className={classes.line} />
        <div className={classes.size}>
          <p className={classes.title}>Size</p>
          <div>
            {MAIN_PRODUCT.size.map((size) => (
              <button>{size}</button>
            ))}
          </div>
        </div>
        <hr className={classes.line} />
        <div className={classes.color}>
          <p className={classes.title}>Color</p>
          <div>
            <img src="images/Group 354.png" alt="product color" />
            <img src="images/Group 356.png" alt="product color" />
          </div>
        </div>
        <hr className={classes.line} />

        <div className={classes.quantity}>
          <p className={classes.title}>Quantity</p>
          <div>
            <button className={classes["btn-quantity"]}>
              <span>-</span>
              <div>1</div>
              <span>+</span>
            </button>
          </div>
          <div className={classes["btn-action"]}>
            <button>Add To Cart</button>
            <button>Pickup From Store</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductOne;