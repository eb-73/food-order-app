import React, { Fragment, useContext, useState } from "react";
import "../../css/UI-Modal/Modal.css";
import ModalItems from "./ModalItems";
import ModalTotal from "./ModalTotal";
import ButtonModal from "./ButtonModal";
import ModalFormOrder from "./ModalFormOrder";
import Context from "../Component-wide/Context";
const Modal = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const contentCtx = useContext(Context);
  const total = contentCtx.productsModal.reduce((acumalator, current) => {
    return acumalator + +current.quality * +current.price;
  }, 0);
  const hideModalForm = () => {
    setDisplayForm(true);
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
        {displayForm && <ModalFormOrder onClick={props.onClick} />}
        {!displayForm && ButttonsDiv}
      </div>
    </Fragment>
  );
};

export default Modal;
