import React from 'react'
import AdminLaning from '../../Components/Adminlanding/Adminlaning'
import UserLanding from '../../Components/Userlanding/Userlanding'

const Home=()=>{
    const userType=localStorage.getItem('userType')
  return(
      <>
        {userType==='Admin'?<AdminLaning/>:<UserLanding/>}
      </>
  )
}
export default Home;