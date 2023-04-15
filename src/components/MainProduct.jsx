import React, { Component } from "react";
import classes from "./MainProduct.module.scss";
import { MAIN_PRODUCT } from "../services/DummyMainProduct";
import Cart from "./Cart";
import MainNav from "./MainNav";

export class MainProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      quantity: 1,
    };
  }

  addToCartHandler = (product) => {
    if (this.state.items.length === 0) {
      this.setState({ items: [...this.state.items, product] });
    }
    if (this.state.items.length > 0) {
      const isSameProduct = this.state.items.map(
        (item) => item.id === product.id
      );
      if (isSameProduct) {
        this.setState({ quantity: this.state.quantity + 1 });
      }
    }
  };

  render() {
    console.log("Product Render");
    return (
      <main className={classes["main-product"]}>
        <section className={classes["product-imgs"]}>
          <div>
            <img src={MAIN_PRODUCT.img} alt="main product image" />
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
              {MAIN_PRODUCT.size.map((size, index) => (
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
              <button className={classes["btn-quantity"]}>
                <span>-</span>
                <div>1</div>
                <span>+</span>
              </button>
            </div>
            <div className={classes["btn-action"]}>
              <button onClick={() => this.addToCartHandler(MAIN_PRODUCT)}>
                Add To Cart
              </button>
              <button>Pickup From Store</button>
            </div>
          </div>
        </section>
        <Cart items={this.state.items} quantity={this.state.quantity} />
        {/* <div style={{ display: 'flex' }}><MainNav quantity={this.state.quantity}/></div> */}
      </main>
    );
  }
}

export default MainProduct;
