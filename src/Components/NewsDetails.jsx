import React, { useEffect, useState } from 'react'
import Header from './Header'
import RightAside from './homelayout/RightAside'
import NewsDetailaCard from '../pages/NewsDetailaCard'
import { useLoaderData, useParams } from 'react-router'

const NewsDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();
    const [news,setnews]=useState({})
    // console.log(data,id,news);

    console.log(id,data);
useEffect(()=>{
    const newsdetails=data.find((singlenews)=>singlenews.id==id);
    setnews(newsdetails) 

},[id.data]);

  return (
    <div className='py-5'>
    <header>
         <Header></Header>
    </header>
    <main className='w-11/12  mx-auto grid grid-cols-12 gap-5 py-8'>
<section className='col-span-9'>
    <h4 className='font-bold text-2xl'>News Details</h4>
    <NewsDetailaCard news={news}></NewsDetailaCard>
</section>
<aside className='col-span-3'>
    <RightAside></RightAside>
</aside>
    </main>
    </div>
  )
}

export default NewsDetails