import React from "react";

function Card({ item, handleDelete  }) {

  function daysBetween() {
    const purchase = new Date(item.purchase_date);
    const expiry = new Date(item.expiry_date);
    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;
    // Calculating the time difference between two dates
    const diffInTime = expiry.getTime() - purchase.getTime();
    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
}


  
  // const pic =   {items[0].image}
  return (
    
    <div className="item_card">
      <img alt="none loaded :(" src={`${item.image}`} className="item_image" style={{width:"10%"}}/>
      <h1 className="item_title"> {item.item_name} </h1>
      <p className="item_expiration_date"> Purchase Date: {item.purchase_date} </p>
      <p className="item_expiration_date"> Expiration Date: {item.expiry_date} </p>
      <p className="days_between"> {daysBetween()} Day(s) left </p>
      
      <button onClick={() => handleDelete(item.id)}>Delete Item</button>

    </div>
  );
}

export default Card;



