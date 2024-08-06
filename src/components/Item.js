
export default function Item({item,delItems,toggle}){

    return(
    <li>
        <input type='checkbox' checked={item.packed} onChange={()=>toggle(item.id)} ></input>
        <span className={`${item.packed?"through":""}`}>{item.quantity} {item.description}</span>
        <button onClick={()=>delItems(item.id)} >❌</button>
    </li>
    );

    
}