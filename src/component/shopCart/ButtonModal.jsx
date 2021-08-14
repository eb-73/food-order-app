import React from "react";
import "../../css/UI-Modal/ButtonModal.css";
const ButtonModal = (props) => {
  return (
    <button
      className={`modal-button ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonModal;
