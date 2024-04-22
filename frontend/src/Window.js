import './App.css';
import React,{useState} from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import CreateUser from './components/Create';
import Login from './components/Login';
import Cart from './components/Cart';
import GreenLand from './components/GreenLand';
import App from './App';




const Window=()=> {

    return (
      <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<GreenLand />} />
                <Route path="/home" element={<Home />} />
                <Route path="/CreateUser" element={<CreateUser />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/app" element={<App/>}/>
           </Routes>
        </BrowserRouter>
      </div>
    );
  

}

export default Window;
