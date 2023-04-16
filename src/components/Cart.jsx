import React, { Fragment } from "react";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

const Cart = ({ items, removeHandler, showcart }) => {
  const getId = (id) => {
    removeHandler(id);
  };

  const closeCart = () => {
    showcart(false);
  };

  const productCard = items.map((item) => (
    <CartItem key={item.id} product={item} getId={getId} />
  ));

  // Calculate total price
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    totalPrice += item.price * item.quantity;
  }

  return (
    <Fragment>
      <div className={classes.cart} onClick={closeCart}></div>
      <div className={classes["cart-container"]}>
        <img
          className={classes.close}
          src="images/Group 1440.png"
          alt="close button"
          onClick={closeCart}
        />
        <div className={classes["cart-body"]}>
          <h2>My Cart</h2>

          <h3>Cart Summary</h3>

          {productCard}
          {items.length > 0 ? (
            <div>
              <h1>Total: {totalPrice.toFixed(2)} LE</h1>
              <div className={classes["cart-btn"]}>
                <button>Review Cart</button>
                <button>Complete Checkout</button>
              </div>
            </div>
          ) : (
            "Cart is empty"
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
