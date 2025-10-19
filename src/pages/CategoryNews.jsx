import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
  const { id } = useParams();
  const dataLoad = useLoaderData();
  console.log(dataLoad);
  const [categoryNews, setcategoryNews] = useState([]);
  useEffect(() => {
    if (id == 0) {
      setcategoryNews(dataLoad);
      return;

    } else if (id == "1") {
      const filterNews = dataLoad.filter((news) => news.others.is_today_pick == true
    );
     setcategoryNews(filterNews);
    }else{
      const filterNews = dataLoad.filter((news) => news.category_id == id);
// console.log(filterNews);
setcategoryNews(filterNews);
    }
   }, [id, dataLoad])
return (
  <div>
    <h2 className='font-bold text-center mb-5'>Total <span className='text-secondary'>{categoryNews.length}</span> news found</h2>
    <div className='grid grid-cols-1 gap-5 '>
      {
        categoryNews.map(news=>
        <NewsCard key={news.id} news={news}></NewsCard>)
      }

    </div>
  </div>
)
}

export default CategoryNews  