import React from "react";
import "../../css/UI-Modal/ModalItems.css";
import ButtonItem from "./ButtonItem";
import ItemsContent from "./ItemsContent";
const ModalItems = (props) => {
  return (
    <li className="Modal-items">
      <ItemsContent content={props.content} />
      <div className="buttons-item">
        <ButtonItem id={props.content.id}>-</ButtonItem>
        <ButtonItem id={props.content.id}>+</ButtonItem>
      </div>
    </li>
  );
};

export default ModalItems;
