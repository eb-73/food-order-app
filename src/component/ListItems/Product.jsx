import React from "react";
import "../../css/UI-List/Product.css";
const Product = (props) => {
  return (
    <div className="product">
      <h2 className="food-name">{props.prod.name}</h2>
      <h3 className="about-food">{props.prod.aboutFood}</h3>
      <h2 className="price">${props.prod.price}</h2>
    </div>
  );
};

export default Product;
