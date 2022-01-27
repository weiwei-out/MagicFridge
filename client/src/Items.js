import React from "react";
import Card from "./Card";

/*
1. import & deconstruct {items}
2. map items -> card 

*/

function Items({ items, handleDelete }) {
  return (
    <div id="items_container">
      <h1 id="items_title">What's in my fridge?</h1>
      <div id="items">
        {items.map((i) => (
          <Card
            item={i}
            handleDelete={handleDelete}
            key={`${i.id}${i.item_name}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Items;
