import { Fragment } from "react";
import classes from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.home}>
        <h1>HOME PAGE</h1>
        <Link to="product">
          <button>Go to Product Page</button>
        </Link>
        <p>With Lazy Loading...</p>
      </div>
    </Fragment>
  );
};

export default Home;
