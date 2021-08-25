import React from "react";
import "../../css/UI-Modal/ButtonModal.css";
const ButtonModal = (props) => {
  return (
    <button
      className={`modal-button ${props.className}`}
      type={props.type || ``}
      onClick={props.onClick}
      disabled={props.disabaled}
    >
      {props.children}
    </button>
  );
};

export default ButtonModal;
