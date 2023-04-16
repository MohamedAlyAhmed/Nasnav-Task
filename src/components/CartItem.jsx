import React, { Fragment } from "react";
import classes from "./CartItem.module.scss";

const CartItem = ({ product, getId }) => {
  const sendId = (id) => {
    getId(id);
  };

  return (
    <Fragment>
      <div className={classes.product}>
        <p>
          <img src={product.img} alt="product" />
        </p>
        <div className={classes["product-details"]}>
          <p>{product.title}</p>
          <p className={classes.quantity}>Quantity: {product.quantity}</p>
          <span>
            <div className={classes.price}>
              {product.price}
              <p className={classes["price-currency"]}> LE</p>
            </div>
            <button
              className={classes.removebtn}
              onClick={() => sendId(product.id)}
            >
              Remove
            </button>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
