import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [inventory, setInventory]= useState(true)
    function handleInventory(){
      setInventory(inventory => !inventory)
    }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inventory ? (
        <button onClick={handleInventory} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInventory} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
