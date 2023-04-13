import React from "react";
import classes from "./CategoryNav.module.scss";

const CategoryNav = () => {
  return (
    <nav className={classes["category-nav"]}>
      <ul>
        <li>Men</li>
        <span>/</span>
        <li>Clothing</li>
        <span>/</span>
        <li>Tops</li>
        <span>/</span>
        <li>Adidas</li>
        <span>/</span>
        <li>Adidas Black T-Shirt</li>
      </ul>
    </nav>
  );
};

export default CategoryNav;
