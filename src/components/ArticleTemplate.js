import React from 'react'

const ArticleTemplate = ( { article }) => {
  return (
    <div className='ArticleTemplate'>
      {article.map((article) => (
        <div>
            <h1>{article.title}</h1>
            <p>{article.text}</p>
            <p>{article.author}</p>
        </div>
      ))}
    </div>
  )
}
 
export default ArticleTemplate
