import React, { Fragment } from "react";
import "../css/Navbar.css";
import SellBox from "./SellBox";
const Navbar = () => {
  return (
    <Fragment>
      <div className="nav">
        <h1>Foods</h1>
        <SellBox />
      </div>
    </Fragment>
  );
};

export default Navbar;
