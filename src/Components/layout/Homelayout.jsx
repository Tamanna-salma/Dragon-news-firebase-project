import React from 'react'
import Header from '../Header'
import LatestNews from '../LatestNews'
import Navber from '../Navber'
import LeftAside from '../homelayout/LeftAside'
import { Outlet } from 'react-router'
import RightAside from '../homelayout/RightAside'
import CategoryNews from '../../pages/CategoryNews'


const Homelayout = () => {
  return (
    <div>
      
     <header>
       <Header></Header>
    <section className='w-11/12 mx-auto my-4'>
      <LatestNews></LatestNews>
    </section>
    <nav className='w-11/12 mx-auto my-4'>
    <Navber></Navber>
    </nav>
     </header>
     <main className='w-11/12 mx-auto my-3 gap-5 grid grid-cols-12'>
      <aside className='col-span-3 sticky top-0 h-fit'>
        <LeftAside></LeftAside>
      </aside>

      <section className='col-span-6 main'>
        <Outlet></Outlet>
      </section> 
       <aside className='col-span-3 sticky top-0 h-fit'>
        <RightAside></RightAside>
      </aside>
     </main>
    </div>
    
  )
}

export default Homelayout