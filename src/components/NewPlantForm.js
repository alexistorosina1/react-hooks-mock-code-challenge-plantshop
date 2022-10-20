import React, { useState } from "react";

function NewPlantForm({plants}) {
const [newPlant, setNewPlant]= useState({...plants}) // {plants}?
const submit = e => {
  e.preventDefault()
  fetch('http://localhost:6001/plants', {
    method: 'POST',
    body: JSON.stringify({ newPlant }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(json => setNewPlant(json.newPlant))
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submit} >
        <input type="text" name="newPlant[name]" placeholder="Plant name" onChange={e => setNewPlant({...plants, name: e.target.value })}/>
        <input type="text" name="newPlant[image]" placeholder="Image URL" onChange={e => setNewPlant({...plants, image: e.target.value })}/>
        <input type="number" name="newPlant[price]" step="0.01" placeholder="Price" onChange={e => setNewPlant({...plants, price: e.target.value })}/>
        <button onClick={submit} type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
