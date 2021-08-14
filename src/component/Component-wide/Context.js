import React, { useState } from "react";
const Context = React.createContext({
  num: "",
  animationFlag: false,
  addNumToSellBox: () => {},
  addItemToModal: () => {},
  modalQuality: () => {},
  productsModal: "",
});
export const ContextCom = (props) => {
  const [order, setNum] = useState({
    number: "0",
    animationFlag: false,
  });

  const [productModal, setProductModal] = useState([]);
  const addNumToSellBox = (Num, flag) => {
    setNum((prevValue) => {
      return {
        ...prevValue,
        number: +Num + +prevValue.number,
        animationFlag: flag,
      };
    });
    setTimeout(() => {
      setNum((prevValue) => {
        return {
          ...prevValue,
          animationFlag: false,
        };
      });
    }, 350);
  };
  const addItemToModal = (Food, numOfFood) => {
    setProductModal((prevValue) => {
      if (prevValue.findIndex((i) => i.id === Food.id) >= 0) {
        return [
          ...prevValue.map((item) => {
            if (item.id === Food.id) {
              item.quality = +item.quality + +numOfFood;
            }
            return item;
          }),
        ];
      } else {
        return [...prevValue, { ...Food, quality: numOfFood }];
      }
    });
  };
  const modalQuality = (func, id) => {
    if (func === "+") {
      setProductModal((prevValue) =>
        prevValue.map((item) => {
          if (item.id === id) {
            item.quality = +item.quality + 1;
          }
          return item;
        })
      );
    } else if (func === "-") {
      setProductModal((prevValue) =>
        prevValue.map((item) => {
          if (item.id === id) {
            if (+item.quality > 1) item.quality = +item.quality - 1;
          }
          return item;
        })
      );
    }
  };
  return (
    <Context.Provider
      value={{
        num: order.number,
        animationFlag: order.animationFlag,
        addNumToSellBox: addNumToSellBox,
        addItemToModal: addItemToModal,
        modalQuality: modalQuality,
        productsModal: productModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
