import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import {Address, Restaurant} from "./model/restaurant"

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
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data) //제네릭. useState 는 restaurant 타입으로 쓴다!

  const changeAddress =(address:Address)=>{
    setMyRestaurant({...myRestaurant,address:address})
  }

 
  return (
    <div className="App">
    <Store info={myRestaurant} changeAddress={changeAddress}/>
    </div>
  );
}

export default App;
