import React, { useState, useContext } from "react";
import Context from "../Component-wide/Context";
import "../../css/UI-List/AddBox.css";
const AddBox = (props) => {
  const [orderNum, setOrderNum] = useState("1");
  const ctx = useContext(Context);
  const AddOrderNumHandle = (e) => {
    const value = e.target.value;
    setOrderNum(value);
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    ctx.addNumToSellBox(orderNum, true);
    ctx.addItemToModal(props.item, orderNum);
  };
  return (
    <form onSubmit={SubmitHandler} className="form-add">
      <div>
        <label htmlFor="num">Amount</label>
        <input
          type="number"
          id="num"
          min="1"
          onChange={AddOrderNumHandle}
          value={orderNum}
          step="1"
          max="100"
        ></input>
      </div>

      <button type="submit">+Add</button>
    </form>
  );
};

export default AddBox;
