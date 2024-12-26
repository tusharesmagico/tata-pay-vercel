import React from 'react'
import NewsCard from '../common-components/newsCard'



const NewsSection = () => {
  return (
    <div className='flex mt-[24px] gap-[40px] justify-center flex-wrap'>
         <NewsCard date={"6th Oct 2024"} readTime={"5 min read"} category={"New"} title={"News of the day"} description={"THis os the description"}/>
         <NewsCard date={"6th Oct 2024"} readTime={"5 min read"} category={"New"} title={"News of the day"} description={"THis os the description"}/>
         <NewsCard date={"6th Oct 2024"} readTime={"5 min read"} category={"New"} title={"News of the day"} description={"THis os the description"}/>
         <NewsCard date={"6th Oct 2024"} readTime={"5 min read"} category={"New"} title={"News of the day"} description={"THis os the description"}/>
         <NewsCard date={"6th Oct 2024"} readTime={"5 min read"} category={"New"} title={"News of the day"} description={"THis os the description"}/>
         <NewsCard date={"6th Oct 2024"} readTime={"5 min read"} category={"New"} title={"News of the day"} description={"THis os the description"}/>
         <NewsCard date={"6th Oct 2024"} readTime={"5 min read"} category={"New"} title={"News of the day"} description={"THis os the description"}/>
         <NewsCard date={"6th Oct 2024"} readTime={"5 min read"} category={"New"} title={"News of the day"} description={"THis os the description"}/>
    </div>
  )
}

export default NewsSection