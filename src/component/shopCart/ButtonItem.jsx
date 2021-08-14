import React, { useContext } from "react";
import "../../css/UI-Modal/ButtonItem.css";
import Context from "../Component-wide/Context";
const ButtonItem = (props) => {
  const btnCtx = useContext(Context);
  const changeQuality = (e) => {
    btnCtx.modalQuality(e.target.innerText, props.id);
  };

  return (
    <button className="modal-items-button" onClick={changeQuality}>
      {props.children}
    </button>
  );
};

export default ButtonItem;
