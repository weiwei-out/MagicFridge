import React from "react";

function Card({ items }) {
  // const pic =   {items[0].image}
  return (
    <div className="item_card">
      <h1>Item</h1>
      {/* {console.log(items[3].image)} */}

      {/* server/db/Pictures/carrots.png */}
      <img
        alt="none loaded :("
        src={`${items[3].image}`}
        className="item_image"
      />

      {/* DELETE BUTTON */}
      <span className="item_title"> {items[0].item_name} </span>
      <span className="item_expiration_date"> {items[0].expiry_date} </span>
    </div>
  );
}

export default Card;
