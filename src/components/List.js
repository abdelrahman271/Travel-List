import { useState } from "react";
import Item from './Item';


export default function List({items,delItems,toggle,clearAll}){

    const [sortBy, setSort] = useState("input");
    let sorted;

    if(sortBy==="input")sorted=items;
    if(sortBy==="description")sorted=items.slice().sort((a,b)=>a.description.localeCompare(b.description));
    if(sortBy==="packed")sorted=items.slice().sort((a,b)=>a.packed -b.packed);
    
    return(
    <div className='list'>
        <ul>
            {sorted.map((item)=>(<Item key={item.id} item={item}  delItems={delItems} toggle={toggle} />))}
        </ul>
        <div className='actions'>
        <select value={sortBy} onChange={(e)=>setSort(e.target.value)} >
            <option value="input">Sort By Input</option>
            <option value="description">Sort By Description</option>
            <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={clearAll} >clear all</button>
        </div>
    </div>

    );

}