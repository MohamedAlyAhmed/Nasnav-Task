import React from "react";
import classes from './SecondNav.module.scss'

const SecondNav = () => {
  return <nav className={classes["second-nav"]}>
    <ul>
      <li>Men</li>
      <li>Women</li>
      <li>Unisex</li>
      <li>Kids</li>
      <li>Best Sellers</li>
      <li>New Arrivals</li>
      <li>Offers</li>
    </ul>
  </nav>;
};

export default SecondNav;


