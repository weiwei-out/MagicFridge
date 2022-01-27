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
  //Creates a new item
function postItem(item) {
  fetch("http://localhost:9292/items",{
      method: "POST",
      headers:{
        'Content-Type': "application/json"
      },
      body: JSON.stringify(item)
      })
    .then(res => res.json())
    .then(newItem => {
      setItems([newItem,...items])
    })
  }

  //Deletes item
function handleDelete(id) {
  fetch(`http://localhost:9292/items/${id}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    setItems(items.filter(i => i.id !== id))
  })
}

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Items">
          <Items items={items} handleDelete={handleDelete} />
          </Route>
          {/* <Route path="/Receipts">
            <Receipts />
          </Route> */}
          <Route path="/Receipts">
          {items.map(i => <Card item={i} handleDelete={handleDelete} key={`${i.id}${i.item_name}`}/>)}
          </Route>
          <Route path="/Groceries">
          <Groceries postItem={postItem}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
