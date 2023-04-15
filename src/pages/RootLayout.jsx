import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <Fragment>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
