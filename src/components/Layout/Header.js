import { Fragment } from "react";

import HeaderCart from "./HeaderCart";
import classes from "./Header.module.css";
import mealsBanner from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Delivery</h1>
        <HeaderCart onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsBanner} alt="Table of delicious food !" />
      </div>
    </Fragment>
  );
};

export default Header;
