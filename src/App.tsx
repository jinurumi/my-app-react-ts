import React from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import {Restaurant} from "./model/restaurant"

let data:Restaurant ={ //타입만들어주기
  name:'누나네 식당',
  category:'western',
  address:{
    city:'incheon',
    detail:'somewhere',
    zipCode:23425634
  },
  menu:[{name:"rose pasta", price:2000,category:"PASTA"},{name:"garlic steak",price:3000,category:"STEAK"}]
}

const App:React.FC = ()=> {
  return (
    <div className="App">
    <Store info={data}/>
    </div>
  );
}

export default App;
