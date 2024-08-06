import { useState } from 'react';
import '../index.css';
import Header from './Header';
import Form from   './Form';
import List from './List';
import Footer from './Footer';


export default function App() {
  const [items,setItems]=useState([]);

  function addItems(item){
    setItems((items)=>[...items,item]);
  }

  function delItems(id){
        setItems(items.filter((item)=>item.id!==id))

  }

  function togglepacked(id){
    setItems(items.map((item)=>item.id===id?{...item,packed:!item.packed}:item))
  }

  function clearAll(){
    setItems([]);
  }

  return(
    <div className='app'>
      <Header />
      <Form addItem={addItems} />
      <List items={items} delItems={delItems} toggle={togglepacked} clearAll={clearAll}/>
      <Footer items={items} />
    </div>
  );
  


}






