import React, { Fragment } from "react";
import MainNav from "./MainNav";
import SecondNav from "./SecondNav";
import FirstNav from "./FirstNav";

const Header = () => {
  return (
    <header>
      <FirstNav />
      <MainNav />
      <SecondNav />
    </header>
  );
};

export default Header;
