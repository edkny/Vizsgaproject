import React from 'react';
import { DrinkList } from '../helper/DrinkList';
import DrinkItem from "../components/DrinkItem";
import "../styles/Drink.css";

function Drink() {
  return (
    <div className='drink'>
        <h1 className='drinkTitle'>Itallap</h1>
        <div className="drinkList">
        {DrinkList.map((drinkItem, key) => {
          return (
            <DrinkItem
              key={key}
              image={drinkItem.image}
              name={drinkItem.name}
              price={drinkItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Drink;