import React from "react";
// import Card from "./Card";

function AddGroceries() {
  return (
    <>
      <h1> Stock my fridge! </h1>
      <h4> Put your groceries in your fridge</h4>
      <form>
        Store:
        <input type="text" name="name" />
        <input type="text" name="" />
        <input type="text" name="name" />
        <input type="text" name="name" />
        <input type="submit" value="Submit" />
      </form>
      <span>Date: </span>
      <span>Amount: </span>
      <span>Item Name: </span>
      <span>Expiration Date: </span>
    </>
  );
}

export default AddGroceries;
