import './index.css'

// lib
// import {useState} from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom';

// component
import Navbar from './components/navbar';
import About from './pages/About'
import Menu from './pages/Menu'
import Home from './pages/Home'
import Reservation from './pages/Reservation'

export default function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <BrowserRouter>
      {/* กำหนดวาง Navbar component ไว้เหนือ Content แต่ละ Page*/}
      
      <Navbar />
      {/* กำนหนดเส้นทาง Page Route  */}
        <Routes>
            {/* หน้าแรก path ไม่ต้องกำหนดอะไร*/}
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="menu" element={<Menu />}/>
            <Route path="reservation" element={<Reservation/>}/>
        </Routes>
        
       {/* Footer */}
       <footer className="py-8 bg-gray-800 text-white text-center">
        <p>{`&copy; 2025 Atlantis Restaurant. All rights reserved.`}</p>
        
      </footer>
    
    </BrowserRouter>
    
    
  )
}

