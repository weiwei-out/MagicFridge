import React from "react";
import Card from "./Card";

/*
1. import & deconstruct {items}
2. map items -> card 

*/

function Items({ items,handleDelete }) {
  return (
    <>
      <h1>What's in my fridge?</h1>
      {items.map(i => <Card item={i} handleDelete={handleDelete} key={`${i.id}${i.item_name}`}/>)}
    </>
  );
}

export default Items;
