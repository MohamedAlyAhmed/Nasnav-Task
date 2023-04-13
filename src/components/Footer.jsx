import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={classes["first-footer"]}>
        {/* first section  */}
        <div className={classes["first-section"]}>
          <img src="images/Group 1436.png" alt="yeshtery logo" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia
            </p>
            <p>
              m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
        <hr />
        {/* second section  */}
        <div className={classes["second-section"]}>
          <div className={classes.subscribe}>
            <p>Subscribe to our newsletter</p>
            <form>
              
                <input type="text" placeholder="Enter Your Mail"/>
               
                <button className="subscribe-icon" type="submit">
                  Subscribe
                  <img src="images/Group 1431.png" alt="Subscribe icon" />
                </button>
           
            </form>
          </div>
          <div className={classes.links}>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Sell With Us</li>
              <li>Shipping And Returns</li>
            </ul>
            <hr />
            <ul className={classes["social-icons"]}>
              <li>
                <img src="images/Group 1432.png" alt="" />
                <p>/YESHTERY</p>
              </li>
              <li>
                <img src="images/Group 1435.png" alt="" />
                <p>/YESHTERY</p>
              </li>
              <li>
                <img src="images/Group 1433.png" alt="" />
                <p>/YESHTERY</p>
              </li>
              <li>
                <img src="images/Group 1434.png" alt="" />
                <p>/YESHTERY</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes["second-footer"]}>
        <div>&#169; 2021 yeshtery, all rights reserved. </div>
        <div>
          <ul>
            <img src="images/Rectangle 586.png" alt="cash on delivery icon" />
            <img src="images/Group 1437.png" alt="visa icon" />
            <img src="images/Group 1438.png" alt="master card icon" />
          </ul>
        </div>
        <div>
          <p>Powered By</p>
          <img src="images/Group 1439.png" alt="nasnav logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
