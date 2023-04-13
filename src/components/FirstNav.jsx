import React from "react";
import classes from "./FirstNav.module.scss";

const FirstNav = () => {
  return (
    <nav className={classes["first-nav"]}>
      <div className={classes.logo}>
        <img src="images/Group 770.png" alt="open menu" />
        <img src="images/Group 769.png" alt="company logo" />
      </div>
      <div className={classes.offer}>
        <img src="images/Path 797.png" alt="arrow left" />
        <p>
          Valentine’s Day Offers! Buy Two Get One Free <span>Shop Now</span>
        </p>
        <img src="images/Path 796.png" alt="arrow right" />
      </div>
      <ul className={classes["icon-list"]}>
        <li>
          <img src="images/Group 756.png" alt="contact us icon" />{" "}
          <span>Contact Us</span>
        </li>
        <li>
          <img src="images/Group 758.png" alt="track order icon " />
          <span>Track Order</span>
        </li>
        <li>
          <img src="images/Group 753.png" alt="find a store icon" />
          <span>Find A Store</span>
        </li>
      </ul>
    </nav>
  );
};

export default FirstNav;
