import React from 'react'
import { NavLink } from 'react-router'
import user from "../assets/assets/user.png"
const Navber = () => {
  return (
    <div className='flex items-center justify-between'>
       <div></div> 
       <div className='nav flex gap-4 text-[#d9d9d9]'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/career">career</NavLink>

        </div> 
       <div className='flex gap-4'>
        <img src={user}alt="" />
        <button className='btn btn-primary px-10'>Login</button>
        
        </div> 
    </div>
  )
}

export default Navber