import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import usericon from "../assets/assets/user.png"
import { Authcontext } from '../provaider/AuthProvider'

const Navber = () => {
  const {user,logout}=use(Authcontext)
  const handleLogout=()=>{
    // console.log("logout");
    logout()
    .then(()=>{
      alert('you logged out successfully');                           
    })
    .catch((error)=>{
      console.log(error);

    })
  }
  
  return (
    <div className='flex items-center justify-between'>
       <div>{user && user.email}</div> 
       <div className='nav flex gap-4 text-[#d9d9d9]'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/career">career</NavLink>

        </div> 
       <div className='flex gap-4'>
        <img src={usericon}alt="" />
        {
          user ?(<button onClick={handleLogout}  className='btn btn-primary px-10'>Logout</button>):(
            <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>
          )}

        </div> 
    </div>
  )
}

export default Navber