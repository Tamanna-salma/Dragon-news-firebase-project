import React from 'react'
import logo from '../assets/assets/logo.png'
import { format } from 'date-fns'
const Header = () => {
  return (
    <div className='flex justify-center flex-col p-4  items-center'>
        <img className='mb-3' src={logo} alt="" />
        <p className='text-[#d9d9d9]'>Journalism Without Fear or Favour</p>
        <p className=''>{format(new Date(),'EEEE, MMMM MM , yyyy')}</p>
     
    </div>
  )
}

export default Header