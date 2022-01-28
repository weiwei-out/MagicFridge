import React, { useState } from 'react';
import Modal from './Modal'

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
  }
  


function Update({ patchItem, item }) {
    const [isOpen, setIsOpen] = useState(false)
    
    const [updateItem, setUpdate] = useState({
        expiry_date: "",
        purchase_date: "",
        quantity: 0,
        item_type: "",
        image: "",
        id: item.id,
        fridge_id: item.fridge_id
      });
    
      function handleChange(event) {
        const key = event.target.name;
        const value = event.target.value;
        setUpdate({ ...updateItem, [key]: value });
      }
      
    
      function handleSubmit(e) {
        e.preventDefault();
        patchItem(updateItem);
      }

  return(
    <>
    
    <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>

    <button className="delete" onClick={() => setIsOpen(true)}>Update Item</button>

    <Modal open={isOpen} onClose={() => setIsOpen(false)}>

    <form onSubmit={handleSubmit}>
        <label>Purchase Date(mm/dd/yyyy):</label>
        <input type="text" name="purchase_date" onChange={handleChange} />
        <p></p>
        <label>Expiration Date(mm/dd/yyyy):</label>
        <input type="text" name="expiry_date" onChange={handleChange} />
        <p></p>
        <label>Quantity:</label>
        <input type="number" name="quantity" onChange={handleChange} />
        <p></p>
        <button type="submit">Update</button>
      </form>

    </Modal>
    </div>
    
    </>
  );
}

export default Update;
