import React from "react";
import classes from "./MainNav.module.scss";

const MainNav = ({ count, showcart }) => {

  const showCart = () => {
    showcart(true);
  };

  return (
    <nav className={classes["main-nav"]}>
      <div className={classes.search}>
        <i>
          <img src="images/search.png" alt="search icon" />
        </i>
        <input type="text" placeholder="Search" />
      </div>
      <div>
        <img src="images/Group 745.png" alt="brand logo" />
      </div>
      <ul className={classes.icons}>
        <li onClick={showCart}>
          <div>
            <div>{count}</div>
            <img src="images/Path 772.png" alt="cart icon" />
          </div>
          Cart
        </li>
        <li>
          <i>
            <img src="images/Path 771.png" alt="wishlist icon" />
          </i>
          Wishlist
        </li>
        <li>
          <i>
            <img src="images/Path 773.png" alt="login icon" />
          </i>{" "}
          Login
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
