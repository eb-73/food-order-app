import React from "react";
import "../../css/UI-Modal/ModalTotal.css";
const ModalTotal = (props) => {
  return (
    <div className="total-amount">
      <h2>TotalAmount</h2>
      <h2>${props.totalPrice}</h2>
    </div>
  );
};

export default ModalTotal;
