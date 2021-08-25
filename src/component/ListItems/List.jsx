import React, { useEffect, useState } from "react";
import Items from "./Items";
import "../../css/UI-List/List.css";
const List = () => {
  const [products, setProducts] = useState([]);
  const [displayLoading, setDisplayLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setDisplayLoading(true);
      const res = await fetch(
        "https://react-practice-6a8fa-default-rtdb.firebaseio.com/meals.json"
      );
      if (!res.ok) {
        throw new Error("somthing is wrong");
      }
      const data = await res.json();
      setProducts(data);
      setDisplayLoading(false);
    };

    fetchData().catch((error) => {
      setDisplayLoading(false);
      setErrorMessage(error.message);
      console.log(error);
    });
  }, []);

  // useEffect(() => {
  //   new Promise((resolve) => {
  //     setDisplayLoading(true);
  //     resolve("display is true");
  //   })
  //     .then(() =>
  //       fetch(
  //         "https://react-practice-6a8fa-default-rtdb.firebaseio.com/meals.json"
  //       )
  //     )

  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .then(() => setDisplayLoading(false))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   setDisplayLoading(true);

  //   fetch("https://react-practice-6a8fa-default-rtdb.firebaseio.com/meals.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .then(() => setDisplayLoading(false))
  //     .catch((err) => console.log(err));
  // }, []);
  if (displayLoading) {
    return <p className="loading-products">loading...</p>;
  } else if (errorMessage) {
    return <p className="error-content">{errorMessage}</p>;
  }

  console.log(products);
  return (
    <ul className="List-Product">
      {products.map((item) => (
        <Items key={item.id} prod={item} />
      ))}
    </ul>
  );
};

export default List;
