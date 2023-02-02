import React from 'react'
import useFetch from '../components/useFetch';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';


const Articles = () => {

  const { data } = useFetch();  
  const { idurl } = useParams();

  const artigoUnico = data.filter(({ id }) => (id === idurl))


  return (
    <div className='article'>
      <Container>
        {artigoUnico.map((item) => (
         <div style={{ whiteSpace: 'normal' }} key={item.id}>
           <div className='title'>
             <h1>{item.title}</h1>
           </div>
           <div className='author'>
             <p>{item.author}</p>
           </div>
           <div className='text'>
          
             { item.text }
            
           </div>
           <div>
           <p style={{ whiteSpace: 'pre' }}>jj  

            f   f
            kk
           </p>
           </div>
         </div> 
       ))}
      </Container>
      
      <p className='uuu' >gggg


        ggg
        gg
      </p>
      
    </div>
  )
}

export default Articles
