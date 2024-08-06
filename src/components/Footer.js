
export default function Footer({items}){
    const numItems=items.length;
    const packed=items.filter((item)=>item.packed).length;
    const percentage=Math.round((packed/numItems)*100);

    if(!numItems)return(
    <div className='footer'>
        <em>Start adding some items to your packing list</em>
    </div>

    );
    
    return(
    <div className='footer'>
            {percentage===100?
                <em>You geted everything! ready to go ✈</em>
                :
                <em>You have {numItems} items on your list, and you already packed {packed} ({percentage}%)</em>
            }
    </div>
    );
}

