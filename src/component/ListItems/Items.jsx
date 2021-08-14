import React from "react";
import Product from "./Product";
import AddBox from "./AddBox";
import "../../css/UI-List/Items.css";
const Items = (props) => {
  return (
    <li className="items-product">
      <Product prod={props.prod} />
      <AddBox item={props.prod} />
    </li>
  );
};

export default Items;
