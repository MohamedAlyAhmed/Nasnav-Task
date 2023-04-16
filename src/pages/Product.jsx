import React, { Component, Fragment } from "react";
import CategoryNav from "../components/CategoryNav";
import ProductSlider from "../components/ProductSlider";
import classes from "./Product.module.scss";
import MainNav from "../components/MainNav";
import FirstNav from "./../components/FirstNav";
import SecondNav from "./../components/SecondNav";
import Footer from "../components/Footer";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countQuantity: 0,
      showCart: false,
      productId: 1,
      cartItems: [],
    };
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  showCartHandler = (isShown) => {
    this.setState({ showCart: isShown });
  };

  showProductDetails = (productId) => {
    //Receive Data From Product Slider To Show in Details
    console.log("RECIVED From Slider" + productId);
    //Save Data in State to send To Product Details to Show
    this.setState({ productId: productId });
  };

  addToCartHandler = (product, quantity) => {
    //Recieve Product and Quantity From Product Details and Add to cart

    const itemIndex = this.state.cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (itemIndex !== -1) {
      // If the product is already in the cart, update the quantity
      const updatedCartItems = [...this.state.cartItems];
      updatedCartItems[itemIndex].quantity += quantity;
      this.setState({ cartItems: updatedCartItems });
    } else {
      product.quantity = quantity;
      this.setState({ cartItems: [...this.state.cartItems, product] });
    }
  };

  removeFromCart(itemToRemoveId) {
    console.log("ITEM REMOVED FROM CART id = " + itemToRemoveId);
    const updatedCartItems = this.state.cartItems.filter(
      (item) => item.id !== itemToRemoveId
    );
    this.setState({ cartItems: updatedCartItems });
  }

  render() {
    console.log("PRODUCT PAGE RENDEER");
    let count = 0;
    for (let i = 0; i < this.state.cartItems.length; i++) {
      const item = this.state.cartItems[i];
      count += item.quantity;
    }
    return (
      <Fragment>
        <header>
          <FirstNav />
          <MainNav count={count} showcart={this.showCartHandler} />
          <SecondNav />
          <CategoryNav />
        </header>

        <ProductDetails
          productId={this.state.productId}
          receiveProduct={this.addToCartHandler}
        />
        {this.state.showCart && (
          <Cart
            items={this.state.cartItems}
            removeHandler={this.removeFromCart}
            showcart={this.showCartHandler}
          />
        )}

        <div className={classes.container}>
          <h1>Similar Products</h1>
          <p>You may like these products also</p>
        </div>
        <ProductSlider recieveId={this.showProductDetails} />

        <Footer />
      </Fragment>
    );
  }
}

export default Product;
