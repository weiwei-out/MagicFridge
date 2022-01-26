import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Items from "./Items";
import Receipts from "./Receipts";
import Groceries from "./AddGroceries";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Items">
            <Items />
          </Route>
          <Route path="/Receipts">
            <Receipts />
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
