import React,{useState,useEffect} from 'react'
import { loadTheme } from "@fluentui/react";
import NavRoutes from './Components/NavRoutes/NavRoutes';
import { DefaultTheme } from './Themes/DefaultTheme';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';

loadTheme(DefaultTheme);
function App() {
  const[navBarFlag,setNavBarFlag]=useState(false)
  const userType=localStorage.getItem('userType')
  const location = useLocation();
  
  useEffect(()=>{
    if(userType){
      setNavBarFlag(true)
    }else{
      setNavBarFlag(false)
    }
  },[userType,location])
  return (
    <React.Fragment>
      {navBarFlag&&<NavBar/>}
      <NavRoutes />
    </React.Fragment>
  );
}

export default App;
