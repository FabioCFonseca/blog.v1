import React from 'react'
import useFetch from '../components/useFetch';
import { useParams } from 'react-router-dom';

const Articles = () => {

  const { data } = useFetch();  
  const { idurl } = useParams();

  const artigoUnico = data.filter(({ id }) => (id === idurl))

  console.log(artigoUnico)

  return (
    <div className='article'>

      {artigoUnico.map((item) => (
        <div key={item.title}>
          <h1>gg {idurl}</h1>
          <h1> { item.text } </h1>
        </div>
      ))}
      
    </div>
  )
}

export default Articles
