import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

const SocialLogin = () => {
  return (
    <div>
        <h2 className=' font-bold mb-5 text-center'>Login with</h2>
        <div className='space-y-4 '>
            <button className='btn btn-outline btn-secondary w-full mt-2'><FcGoogle size={20} />Login with Google</button>
        <button className='btn btn-outline btn-primary w-full'><BsGithub size={20} />Login with github</button>
        </div>
    </div>
  )
}

export default SocialLogin