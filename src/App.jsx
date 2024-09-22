import './index.css'

// lib
import {useState} from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom';

// component
import Navbar from './components/Navbar/navbar';
import About from './components/About/about'
import Menu from './components/Menu/menu'
import Home from './components/Home/home'
import Reservation from './components/Reservation/reservation'

export default function App() {
  // const [count, setCount] = useState(0)
  const [amountFood,setAmountFood] = useState(0);

  // function 
  const getAmountFood = (newAmount) =>{
    // console.log(newAmount)
    setAmountFood(newAmount);
    
  }

  return (
    <BrowserRouter>
      {/* กำหนดวาง Navbar component ไว้เหนือ Content แต่ละ Page*/}
      
      <Navbar amountFood={amountFood}/>
      {/* กำนหนดเส้นทาง Page Route  */}
        <Routes>
            {/* หน้าแรก path ไม่ต้องกำหนดอะไร*/}
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="menu" element={<Menu getAmountFood={getAmountFood}/>}/>
            <Route path="reservation" element={<Reservation/>}/>
        </Routes>
        
    
    </BrowserRouter>
    
    
  )
}

