import React from 'react'
import swimmingImg from '../../assets/assets/swimming.png'
import classImg from '../../assets/assets/class.png'
import playingImg from '../../assets/assets/playground.png'
import bgImg from '../../assets/assets/bg.png'

const Qzone = () => {
  return (
    <div className='bg-base-300 p-3'>
        <h2 className='font-bold mt-5 text-center '>Q-Zone</h2>
        <div className='space-y-5'>
           <img src={swimmingImg}alt="" /> 
           <img src={classImg}alt="" /> 
           <img src={playingImg}alt="" /> 
        </div>
        <img src={bgImg} alt="" />
    </div>
  )
}

export default Qzone