import React, { useState, useContext } from "react";
import "../../css/UI-Modal/ModalFormOrder.css";
import ButtonModal from "./ButtonModal";
import useInput from "../../hooks/UseInput";
import Context from "../Component-wide/Context";

const ModalFormOrder = (props) => {
  const ctxModalForm = useContext(Context);

  const [
    inputNameValue,
    inValidInputName,
    validateInputName,
    inputNameOnChange,
    inputNameOnBlur,
    inputNameOnSubmit,
  ] = useInput();
  const [
    inputStreetValue,
    inValidInputStreet,
    validateInputStreet,
    inputStreetOnChange,
    inputStreetOnBlur,
    inputStreetOnSubmit,
  ] = useInput();
  const [
    inputCityValue,
    inValidInputCity,
    validateInputCity,
    inputCityOnChange,
    inputCityOnBlur,
    inputCityOnSubmit,
  ] = useInput();
  const [
    inputPostalCodeValue,
    inValidInputPostalCode,
    validateInputPostalCode,
    inputPostalCodeOnChange,
    inputPostalCodeOnBlur,
    inputPostalCodeOnSubmit,
  ] = useInput();
  const formValidate =
    validateInputName &&
    validateInputStreet &&
    validateInputCity &&
    validateInputPostalCode;
  const submitHandler = (e) => {
    e.preventDefault();
    if (!formValidate) {
      return;
    }
    inputNameOnSubmit();
    inputStreetOnSubmit();
    inputCityOnSubmit();
    inputPostalCodeOnSubmit();
    fetch(
      "https://react-practice-6a8fa-default-rtdb.firebaseio.com/orderMeals.json",
      {
        method: "POST",
        body: JSON.stringify({
          orderList: { ...ctxModalForm.productsModal },
          userInfo: {
            name: inputNameValue,
            street: inputStreetValue,
            city: inputCityValue,
            postalCode: inputPostalCodeValue,
          },
        }),
      }
    ).then(() => {
      ctxModalForm.clearProductsModal();
      props.onDone();
    });
  };
  return (
    <form onSubmit={submitHandler} className="modal-form">
      <div className={`input-wraper ${inValidInputName && "input-invalid"}`}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Your Name"
          value={inputNameValue}
          onChange={inputNameOnChange}
          onBlur={inputNameOnBlur}
        ></input>
      </div>

      <div className={`input-wraper ${inValidInputStreet && "input-invalid"}`}>
        <label htmlFor="street">Street</label>
        <input
          name="street"
          id="street"
          type="text"
          placeholder="Type Street"
          value={inputStreetValue}
          onChange={inputStreetOnChange}
          onBlur={inputStreetOnBlur}
        ></input>
      </div>

      <div className={`input-wraper ${inValidInputCity && "input-invalid"}`}>
        <label htmlFor="city">City</label>
        <input
          name="city"
          id="city"
          type="text"
          placeholder="Your City"
          value={inputCityValue}
          onChange={inputCityOnChange}
          onBlur={inputCityOnBlur}
        ></input>
      </div>

      <div
        className={`input-wraper ${inValidInputPostalCode && "input-invalid"}`}
      >
        <label htmlFor="code">PostalCode</label>
        <input
          name="postalcode"
          id="code"
          type="text"
          placeholder="Your Postal Code"
          value={inputPostalCodeValue}
          onChange={inputPostalCodeOnChange}
          onBlur={inputPostalCodeOnBlur}
        ></input>
      </div>

      <div className="button-wraper">
        <ButtonModal
          type="button"
          onClick={props.onClick}
          className="modal-button-close"
        >
          Cancel
        </ButtonModal>
        <ButtonModal
          type="submit"
          className="modal-button-order"
          disabaled={!formValidate}
        >
          Confirm
        </ButtonModal>
      </div>
    </form>
  );
};

export default ModalFormOrder;
