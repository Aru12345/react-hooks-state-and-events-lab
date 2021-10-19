import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const[light,setDark]=useState(false);
   function handleDarkModeClick(){
    setDark((light)=> !light)
   }
   
   
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"
  const appDark=light? "App dark":"App light"
  return (
    <div className={appDark}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
