import React,{useState} from "react";
import Card from "./Card"
// import Card from "./Card";

function AddGroceries({postItem}) {
const [newitem,setNewitem] = useState({
   item_name:"",
   expiry_date:"",
   purchase_date:"",
    quantity:0,
    item_type:"",
    image:""
    //fridge_id:fridge1.id
  })


function handleChange(event){
  const key = event.target.name
  const value = event.target.value
  setNewitem({...newitem, [key]:value})
}

function handleSubmit(e) {
    e.preventDefault();
    postItem(newitem)

  }

  return (
    <div>
      <h1> Stock my fridge! </h1>
      <h4> Put your groceries in your fridge</h4>

      <form onSubmit={handleSubmit}>
      <label >Name:</label>
        <input type="text" name="item_name" onChange={handleChange}/>
        <p></p>
        <label >Purchase Date(mon/day/year):</label>
        <input type="text" name="purchase_date" onChange={handleChange}/>
        <p></p>
      <label >Expirition.Date(mon/day/year):</label>
        <input type="text" name="expiry_date" onChange={handleChange}/>
        <p></p>
      <label >Type:</label>
        <input type="text" name="item_type" onChange={handleChange}/>
        <p></p>
      <label >Quantity:</label>
        <input type="number" name="quantity" onChange={handleChange} />
        <p></p>
        <label >Image:</label>
        <input type="text" name="image" onChange={handleChange}/>
        <p></p>
        <button type="submit">create</button>
      </form>
    </div>
  );
}

export default AddGroceries;