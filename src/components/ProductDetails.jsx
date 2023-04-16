import React, { Component } from "react";
import classes from "./ProductDetails.module.scss";
import { DUMMY_PRODUCTS } from "../services/DummyProducts";
import ProductImageGallery from "./ProductImageGallery";

export class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      quantityCount: 1,
    };
  }

  addToCartHandler = (pr) => {
    const productQuantity = this.state.quantityCount;
    this.props.receiveProduct(pr, productQuantity);
  };

  increaseCount = () => {
    this.setState({ quantityCount: this.state.quantityCount + 1 });
  };

  decreaseCount = () => {
    this.setState({ quantityCount: this.state.quantityCount - 1 });
  };

  render() {
    const ProductData = DUMMY_PRODUCTS.find(
      (product) => product.id === this.props.productId
    );
    return (
      <main className={classes["main-product"]}>
        <ProductImageGallery images={ProductData.img} />
        <section className={classes["product-details"]}>
          <div className={classes["main-details"]}>
            <div>
              <img src="images/Group 346.png" alt="brand logo" />
            </div>
            <p className={classes.title}>{ProductData.title}</p>
            <p className={classes.category}>{ProductData.category}</p>
            <div className={classes.rate}>
              <div className={classes.star}>
                <img src="images/Path 368.png" alt="star" />
                <img src="images/Path 368.png" alt="star" />
                <img src="images/Path 368.png" alt="star" />
                <img src="images/Path 368.png" alt="star" />
                <img src="images/Path 369.png" alt="star" />
              </div>
              <p>{ProductData.rate} of 5</p>
              <div>{ProductData["rate-count"]} Rates</div>
            </div>
            <div className={classes.price}>
              <h2>
                {ProductData.price} <span>LE</span>
              </h2>
              {ProductData.disscount && <del>9.999 LE</del>}
              {ProductData.disscount && <h4>{ProductData.disscount}% Off</h4>}
            </div>
          </div>
          <hr className={classes.line} />
          <div className={classes.size}>
            <p className={classes.title}>Size</p>
            <div>
              {ProductData.size.map((size, index) => (
                <button key={index}>{size}</button>
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
              <div className={classes["btn-quantity"]}>
                <button
                  onClick={this.decreaseCount}
                  disabled={this.state.quantityCount === 1}
                  className={classes.btnOne}
                >
                  -
                </button>
                <div>{this.state.quantityCount}</div>
                <span onClick={this.increaseCount}>+</span>
              </div>
            </div>
            <div className={classes["btn-action"]}>
              <button onClick={() => this.addToCartHandler(ProductData)}>
                Add To Cart
              </button>
              <button>Pickup From Store</button>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default ProductDetails;
