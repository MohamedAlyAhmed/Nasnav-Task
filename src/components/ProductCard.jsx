import React from "react";
import classes from "./ProductCard.module.scss";

const ProductCard = ({ data, recieveProductData }) => {
  return (
    <div className={classes.card} onClick={() => recieveProductData(data.id)}>
      <div className={classes["main-img"]}>
        <img
          src={data.img[0]}
          alt="product image"
          className={classes["product-img"]}
        />
        <div>
          <img src="images/Group 338.png" alt="360 degree" />
        </div>
      </div>
      <div className={classes["card-body"]}>
        <h2>{data.title}</h2>
        <div className={classes["section-two"]}>
          <div className={classes.price}>
            <h3>
              {data.price} <span>LE</span>
            </h3>

            {data.disscount && <del>9.999 LE</del>}
            {data.disscount && <h6>{data.disscount}%</h6>}
          </div>
          <img src="images/Group 346.png" alt="brand logo" />
        </div>
        <div className={classes.rate}>
          <div className={classes.stars}>
            <img src="images/Path 368.png" alt="star" />
            <img src="images/Path 368.png" alt="star" />
            <img src="images/Path 368.png" alt="star" />
            <img src="images/Path 368.png" alt="star" />
            <img src="images/Path 369.png" alt="star" />
          </div>
          <p>{data.rate} of 5</p>
        </div>

        <h5>
          Pickup From: <span>Genena Mall</span>
        </h5>
      </div>
    </div>
  );
};

export default ProductCard;
