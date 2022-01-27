import React from "react";

function Card({ item, handleDelete  }) {
  
  // const pic =   {items[0].image}
  return (
    
    <div className="item_card">
      <img alt="none loaded :(" src={`${item.image}`} className="item_image" style={{width:"20%"}}/>
      <h1 className="item_title"> {item.item_name} </h1>
      <p className="item_expiration_date"> Purchase Date: {item.purchase_date} </p>
      <p className="item_expiration_date"> Expiration Date: {item.expiry_date} </p>
      
      <button onClick={() => handleDelete(item.id)}>Delete Item</button>

    </div>
  );
}

export default Card;

