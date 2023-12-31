import React from "react";

function DrinkItem({ image, name, price }) {
  return (
    <div className="drinkItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {price} </p>
    </div>
  );
}

export default DrinkItem;