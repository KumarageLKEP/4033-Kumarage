import './App.css';
import React,{useState} from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import CreateUser from './components/Create';
import Login from './components/Login';
import Cart from './components/Cart';
import Window from './Window';




const App=()=> {
  const [log, setlog] = useState('');
  const handleLogChange = (newlog)=>{
    setlog(newlog);
  }
  if(log==='')
  {
    return (
      <div className='login-container' style={{display:'flex',alignItems:'center'}}>
        <div>
        <div style={{display:'flex',fontSize:'50px',fontWeight:'500',color:'#fcf3cf'}}>
          <div style={{color:'white'}}>Welcome to </div><strong>_GREENLAND_</strong>
        </div>
      <div style={{padding:'100px',paddingLeft:'60px'}}>
        <Login onLogChange={handleLogChange}/>
      </div>
        </div>
      <div style={{padding:'100px',marginBottom:'70px'}}>
        <CreateUser/>
      </div>
      </div>
    );
  }  else if(log==='1'){
    return(
      <div>
      <Window/>
    </div>
    );
  }

}

export default App;
