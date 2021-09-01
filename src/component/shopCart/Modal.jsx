import React, { Fragment, useContext, useState } from "react";
import "../../css/UI-Modal/Modal.css";
import ModalItems from "./ModalItems";
import ModalTotal from "./ModalTotal";
import ButtonModal from "./ButtonModal";
import ModalFormOrder from "./ModalFormOrder";
import Context from "../Component-wide/Context";
const Modal = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [displayDone, setDisplayDone] = useState(false);

  const contentCtx = useContext(Context);
  const total = contentCtx.productsModal.reduce((acumalator, current) => {
    return acumalator + +current.quality * +current.price;
  }, 0);
  const hideModalForm = () => {
    setDisplayForm(true);
  };
  const doneHandle = () => {
    setDisplayDone(true);
  };
  const ButttonsDiv = (
    <div className="buttons-modal">
      <ButtonModal onClick={props.onClick} className="modal-button-close">
        Close
      </ButtonModal>
      <ButtonModal className="modal-button-order" onClick={hideModalForm}>
        Order
      </ButtonModal>
    </div>
  );
  const modalContent = (
    <Fragment>
      <ul>
        {contentCtx.productsModal.map((item) => (
          <ModalItems key={item.id} content={item} />
        ))}

        <ModalTotal totalPrice={total.toFixed(2)} />
      </ul>
      {displayForm && (
        <ModalFormOrder onClick={props.onClick} onDone={doneHandle} />
      )}
      {!displayForm && ButttonsDiv}
    </Fragment>
  );
  return (
    <Fragment>
      <div className="modal-out" onClick={props.onClick}></div>
      <div className="modal-box">
        {displayDone && <p className="done-message">your Order Sent</p>}
        {!displayDone && modalContent}
      </div>
    </Fragment>
  );
};

export default Modal;
