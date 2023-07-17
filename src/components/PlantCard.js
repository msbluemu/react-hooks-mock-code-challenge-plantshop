import React, { useState } from "react";

function PlantCard({plant}) {
  const {id, name, image, price} = plant;
  const[isSoldOut, setIsSoldOut] = useState(true);

  function handleClickButton(){
    setIsSoldOut(!isSoldOut)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isSoldOut ? (
        <button className="primary" onClick={handleClickButton}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
