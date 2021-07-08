import React,{useState,useEffect} from 'react'
import { loadTheme } from "@fluentui/react";
import NavRoutes from './Components/NavRoutes/NavRoutes';
import { DefaultTheme } from './Themes/DefaultTheme';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux'

loadTheme(DefaultTheme);
function App() {
  const[navBarFlag,setNavBarFlag]=useState(false)
  const userType=sessionStorage.getItem('userType')
  const location = useLocation();
  const { UserData } = useSelector((state) => {
    return {
        UserData: state.LoginCheckReducer.userData,
    }
})
  
  useEffect(()=>{
    if(userType &&UserData){
      setNavBarFlag(true)
    }else{
      setNavBarFlag(false)
    }
  },[userType,location,UserData])
  return (
    <React.Fragment>
      {navBarFlag&&<NavBar/>}
      <NavRoutes />
    </React.Fragment>
  );
}

export default App;
