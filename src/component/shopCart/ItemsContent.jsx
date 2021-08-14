import React from "react";
import "../../css/UI-Modal/ItemsContent.css";

const ItemsContent = (props) => {
  return (
    <div className="modal-items-content">
      <h3>{props.content.name}</h3>
      <h4>${props.content.price}</h4>
      <div>{`×${props.content.quality}`}</div>
    </div>
  );
};

export default ItemsContent;
