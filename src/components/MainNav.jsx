// import React from "react";
// import classes from "./MainNav.module.scss";


// const MainNav = ({quantity}) => {
//   console.log("Main Nav Render");
//   console.log(quantity);
//   return (
//     <nav className={classes["main-nav"]}>
//       <div className={classes.search}>
//         <i><img src="images/search.png" alt="search icon" /></i>
//         <input type="text"  placeholder="Search" />
//       </div>
//       <div><img src="images/Group 745.png" alt="brand logo" /></div>
//       <ul className={classes.icons}>
//         <li><div><div>{quantity === 1 ? '1' : '0'}</div><img src="images/Path 772.png" alt="cart icon" /></div>Cart</li>
//         <li><i><img src="images/Path 771.png" alt="wishlist icon" /></i>Wishlist</li>
//         <li><i><img src="images/Path 773.png" alt="login icon" /></i> Login</li>
//       </ul>
//     </nav>
//   );
// };

// export default MainNav;

import React, { Component } from "react";
import classes from "./MainNav.module.scss";

class MainNav extends Component {
  // count = this.props.quantity;

  render() {
    
    console.log("Main Nav Render");
    // console.log(this.count);
    // console.log(quantity);
    // console.log(this.state.count);
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
          <li>
            <div>
              <div>0</div>
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
            </i>
            Login
          </li>
        </ul>
      </nav>
    );
  }
}

export default MainNav;
