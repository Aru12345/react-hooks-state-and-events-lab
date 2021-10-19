import React, { useState } from "react";





function Item({ name, category }) {
  const[addToCart,removeFromCart]=useState(false);
  function handleAddToCart(){
    removeFromCart((addToCart)=>!addToCart)
   
  }


  return (
    
      <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button  onClick={handleAddToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
