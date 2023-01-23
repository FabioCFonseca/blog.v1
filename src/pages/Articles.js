import React from 'react'
import ArticleTemplate from '../components/ArticleTemplate'
import useFetch from '../components/useFetch'

const Articles = () => {
    const { data } = useFetch();  

  return (
    <div className='article'>
      <ArticleTemplate article = { data } />
    </div>
  )
}

export default Articles
