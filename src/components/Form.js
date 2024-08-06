import { useState } from "react";

export default function Form({addItem}){
    const [quantity,setQuantity]=useState(1);
    const [description,setDescription]=useState("");
  
    function handleForm(e){
      e.preventDefault();
      if(!description)return;
  
      const newItem={quantity,description,packed:false,id:Date.now()};
      addItem(newItem);
      setDescription("");
      setQuantity(1);
    }
  
    
  
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return(
      <form className='add-form' onSubmit={handleForm}>
        <h3>What do you need for your trip?</h3>
        <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
          {options}
        </select>
        <input type='text' placeholder='item...' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
        <button type='submit'>add</button>
      </form>
    );
  
  }