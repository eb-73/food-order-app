import React, { Fragment, useContext, useState } from "react";
import ReactDom from "react-dom";
import "../css/SellBox.css";
import Modal from "./shopCart/Modal";
import Context from "./Component-wide/Context";
const SellBox = () => {
  const sellCtx = useContext(Context);
  const [modalFlag, setFlagModal] = useState(false);

  const displayModal = () => {
    setFlagModal(true);
  };
  const hideModal = () => {
    setFlagModal(false);
  };
  return (
    <Fragment>
      <div
        onClick={displayModal}
        className={`nav-cart ${sellCtx.animationFlag && "animation"}`}
      >
        <i className="fas fa-shopping-cart"></i>
        <h3>Your cart</h3>
        <div className="counter-product">{sellCtx.num}</div>
      </div>
      {modalFlag &&
        ReactDom.createPortal(
          <Modal onClick={hideModal} />,
          document.getElementById("modal")
        )}
    </Fragment>
  );
};

export default SellBox;
