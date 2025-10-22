import React from 'react'
import { Link } from 'react-router';

const NewsDetailaCard = ({news}) => {
    console.log(news);
  return (
    <div className='space-y-6'>
        <img className='w-full h-96 mt-4' src={news.image_url} alt="" />
        <h4 className='text-2xl'>{news.title}</h4>
        <p>{news.details}</p>
        <Link className='btn btn-secondary p-2' to={`/category/${news.category_id}`}>Back to category</Link>

        </div>
  )
}

export default NewsDetailaCard