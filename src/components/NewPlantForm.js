import React, { useState } from "react";

function NewPlantForm({onAddPlant}) {
  const [newName, setNewName] = useState("");
  const [newURL, setNewURL] = useState("");
  const [newPrice, setNewPrice] = useState("");
  
  function handleSubmit(e){
    e.preventDefault();
    const newPlantData = {
      name: newName,
      image: newURL,
      price: newPrice,
    };
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlantData),
    })
    .then((r) => r.json())
    .then((newPlant) => onAddPlant(newPlant));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newName} onChange={e => setNewName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={newURL} onChange={e => setNewURL(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPrice} onChange={e => setNewPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}


export default NewPlantForm;
