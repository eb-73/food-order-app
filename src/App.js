import React, { Fragment } from "react";
import "./css/App.css";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import List from "./component/ListItems/List";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <List />
    </Fragment>
  );
}

export default App;
