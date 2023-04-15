import React, { Fragment } from "react";
import classes from "./CartItem.module.scss";

const CartItem = ({ product, quantity }) => {
  const totalPrice = product.price * quantity;
  return (
    <Fragment>
      <div className={classes.product}>
        <p>
          <img src={product.img} alt="" />
        </p>
        <div className={classes["product-details"]}>
          <p>{product.title}</p>
          <p className={classes.quantity}>Quantity: {quantity}</p>
          <span>
            <p className={classes.price}>
              {product.price}
              <h3> LE</h3>
            </p>
            <button>Remove</button>
          </span>
        </div>
      </div>
      <h1>Total: {totalPrice.toFixed(3)} LE</h1>
    </Fragment>
  );
};

export default CartItem;
