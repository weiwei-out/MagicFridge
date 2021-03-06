import React, { useState } from "react";
import Card from "./Card";

/*
1. import & deconstruct {items}
2. map items -> card 

*/

function Items({ items, handleDelete }) {
  const [type, setType] = useState("all");

  const filteredItems = items.filter((item) => item.item_type === type);
  return (
    <div id="items_container">
      <h1 id="items_title">What's in my fridge?</h1>
      <div id="filter">
        <select id="filter3" onChange={(e) => setType(e.target.value)}>
          <option value="all">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
          <option value="Dip">Dip</option>
          <option value="Sauce">Sauce</option>
          <option value="Meat">Meat</option>
          <option value="Poultry">Poultry</option>
          <option value="Beverage">Beverage</option>
        </select>
      </div>
      <div id="items">
        {(type === "all" ? items : filteredItems).map((i) => (
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
