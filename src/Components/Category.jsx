import React, { use } from 'react'
import { NavLink } from 'react-router';
const categorypromise=fetch("/categories.json").then((res)=>res.json());
const Category = () => {
    const category =use(categorypromise)
   
  return (
    <div>
        <h2 className='font-bold text-center'>All caregory({category.length})</h2>
        <div className='grid grid-cols-1 mt-5'>
         {category.map(categoris=><NavLink key={categoris.id} className={'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-[#a5a3a3]'}to={`/category/${categoris.id}`}>{categoris.name}</NavLink>)
            }

        </div>
    </div>
  )
}

export default Category