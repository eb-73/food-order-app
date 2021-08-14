import React, { Fragment, useContext } from "react";
import "../../css/UI-Modal/Modal.css";
import ModalItems from "./ModalItems";
import ModalTotal from "./ModalTotal";
import ButtonModal from "./ButtonModal";
import Context from "../Component-wide/Context";
const Modal = (props) => {
  const contentCtx = useContext(Context);
  const total = contentCtx.productsModal.reduce((acumalator, current) => {
    return acumalator + +current.quality * +current.price;
  }, 0);

  return (
    <Fragment>
      <div className="modal-out" onClick={props.onClick}></div>

      <div className="modal-box">
        <ul>
          {contentCtx.productsModal.map((item) => (
            <ModalItems key={item.id} content={item} />
          ))}

          <ModalTotal totalPrice={total.toFixed(2)} />
        </ul>
        <div className="buttons-modal">
          <ButtonModal onClick={props.onClick} className="modal-button-close">
            Close
          </ButtonModal>
          <ButtonModal className="modal-button-order">Order</ButtonModal>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
