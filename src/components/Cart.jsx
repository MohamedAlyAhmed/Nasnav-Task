import React from "react";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

const Cart = ({ items, quantity }) => {
  console.log("Cart Render");
  const productCard = items.map((item) => (
    <CartItem key={item.id} product={item} quantity={quantity} />
  ));

  return (
    <div className={classes.cart}>
      <div className={classes["cart-container"]}>
        <div className={classes["cart-body"]}>
          <h2>My Cart</h2>
          <h3>Cart Summary</h3>
          {productCard}
          {items.length > 0 ? (
            <div className={classes["cart-btn"]}>
              <button>Review Cart</button>
              <button>Complete Checkout</button>
            </div>
          ) : (
            "Cart is empty"
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
