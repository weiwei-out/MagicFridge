import React, { useState } from "react";
import Card from "./Card";
// import Card from "./Card";

function AddGroceries({ postItem }) {
  const [newitem, setNewitem] = useState({
    item_name: "",
    expiry_date: "",
    purchase_date: "",
    quantity: 0,
    item_type: "",
    image: "",
    //fridge_id:fridge1.id
  });

  function handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    setNewitem({ ...newitem, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    postItem(newitem);
  }

  return (
    <>
      <h1 id="groceries_title"> Stock my fridge! </h1>
      <div id="bar" />
      <div id="groceries">
        <div id="groceries2box">
          <h4 id="groceries2"> Put your groceries in your fridge!</h4>
        </div>
        <div id="groceries3box">
          <form onSubmit={handleSubmit}>
            <label>Item Name:</label>
            <input type="text" name="item_name" onChange={handleChange} />
            <p></p>
            <label>Purchase Date(MM/DD/YYYY):</label>
            <input type="text" name="purchase_date" onChange={handleChange} />
            <p></p>
            <label>Expirition Date(MM/DD/YYYY):</label>
            <input type="text" name="expiry_date" onChange={handleChange} />
            <p></p>
            <label>Type:</label>
            <input type="text" name="item_type" onChange={handleChange} />
            <p></p>
            <label>Quantity:</label>
            <input type="number" name="quantity" onChange={handleChange} />
            <p></p>
            <label>Image URL:</label>
            <input type="text" name="image" onChange={handleChange} />
            <p></p>
            <button id="submit1" type="submit">
              create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddGroceries;
