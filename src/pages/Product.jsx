import React, { Component } from "react";
import CategoryNav from "../components/CategoryNav";
import ProductSlider from "../components/ProductSlider";
import classes from "./Product.module.scss";
import MainProduct from "../components/MainProduct";
import MainNav from "../components/MainNav";
import FirstNav from "./../components/FirstNav";
import SecondNav from "./../components/SecondNav";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countQuantity: 0,
      showCart: false,
    };
  }

  handleData = (data, isShown) => {
    this.setState({ countQuantity: data, showCart: isShown });
  };

  isShownHandler = (data) => {
    //Data From Main Nav
    this.setState({ showCart: data }); //true from click
  };

  render() {
    return (
      <>
        <FirstNav />
        <MainNav
          count={this.state.countQuantity}
          showcart={this.isShownHandler}
        />
        <SecondNav />
        <CategoryNav />
        <MainProduct onData={this.handleData} isShown={this.state.showCart} />
        <div className={classes.container}>
          <h1>Similar Products</h1>
          <p>You may like these products also</p>
        </div>
        <ProductSlider />
      </>
    );
  }
}

export default Product;
