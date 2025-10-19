import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook,  } from 'react-icons/fa'
import { PiInstagramLogo } from 'react-icons/pi'


export const Find = () => {
  return (
    <div>
        <h2 className='font-bold mb-4 text-center'>Find us</h2>
        <div>
            <div className="join join-vertical w-full">
  <button className="btn bg-base-100 join-item justify-start"><FaFacebook className='text-blue-700'></FaFacebook> Facebook</button>
  <button className="btn bg-base-100 join-item justify-start"><BsTwitter className='text-blue-500'></BsTwitter> Twitter</button>
  <button className="btn bg-base-100 join-item justify-start"><PiInstagramLogo className='text-rose-700'></PiInstagramLogo> Instregram</button>
</div>
        </div>
    </div>
  )
}
