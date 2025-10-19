import React from 'react'
import SocialLogin from '../SocialLogin'
import { Find } from './Find'
import Qzone from './Qzone'

const RightAside = () => {
  return (
    <div className='space-y-6'>
      <SocialLogin></SocialLogin>
      <Find></Find>
      <Qzone></Qzone>
    </div>
  )
}

export default RightAside