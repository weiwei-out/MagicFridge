import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Items from "./Items";
import Receipts from "./Receipts";
import Groceries from "./AddGroceries";
import Card from "./Card";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/items")
      .then((r) => r.json())
      .then(setItems)
      .then(console.log(items));
    // .then((items) => console.log(items));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Items">
            <Items items={items} />
          </Route>
          {/* <Route path="/Receipts">
            <Receipts />
          </Route> */}
          <Route path="/Receipts">
            <Card items={items} />
          </Route>
          <Route path="/Groceries">
            <Groceries />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
