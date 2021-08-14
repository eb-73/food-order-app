import React, { useState } from "react";
import Items from "./Items";
import "../../css/UI-List/List.css";
const List = () => {
  const [products, setProducts] = useState([
    {
      id: "p1",
      name: "sushi",
      aboutFood: "a food for fish",
      price: "23.55",
    },
    {
      id: "p2",
      name: "steak",
      aboutFood: "a food for fish",
      price: "22.94",
    },
    {
      id: "p3",
      name: "spaghetti",
      aboutFood: "a food for fish",
      price: "29.85",
    },
    {
      id: "p4",
      name: "pizza",
      aboutFood: "a food for fish",
      price: "33.57",
    },
  ]);
  return (
    <ul className="List-Product">
      {products.map((item) => (
        <Items key={item.id} prod={item} />
      ))}
    </ul>
  );
};

export default List;
