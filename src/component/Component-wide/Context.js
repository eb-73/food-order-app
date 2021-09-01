import React, { useState } from "react";
const Context = React.createContext({
  num: "",
  animationFlag: false,
  addNumToSellBox() {},
  addItemToModal() {},
  modalQuality() {},
  clearProductsModal() {},
  productsModal: "",
});
export const ContextCom = (props) => {
  const [displayAnimation, setDisplayAnimation] = useState(false);
  const [totalQuality, setTotalQuality] = useState(0);

  const [productModal, setProductModal] = useState([]);
  const addNumToSellBox = (flag) => {
    setDisplayAnimation(flag);

    setTimeout(() => {
      setDisplayAnimation(false);
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
    setTotalQuality((prevValue) => +prevValue + +numOfFood);
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
      setTotalQuality((prevValue) => +prevValue + 1);
    } else if (func === "-") {
      setProductModal((prevValue) => {
        const statee = [...prevValue];
        const item = statee.find((item) => item.id === id);
        const itemIndex = statee.findIndex((item) => item.id === id);
        if (item.quality > 1) {
          statee[itemIndex].quality = +item.quality - 1;
        } else if (item.quality == 1) {
          statee.splice(itemIndex, 1);
        }
        return [...statee];
      });
      setTotalQuality((prevValue) => +prevValue - 1);
    }
  };

  const clearProductsModal = () => {
    setProductModal([]);
  };
  return (
    <Context.Provider
      value={{
        num: totalQuality,
        animationFlag: displayAnimation,
        addNumToSellBox: addNumToSellBox,
        addItemToModal: addItemToModal,
        modalQuality: modalQuality,
        clearProductsModal: clearProductsModal,
        productsModal: productModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
