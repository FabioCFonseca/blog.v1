import * as React from 'react';
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container';


export default function ButtonAppBar() {
  return (
    <div className='header'>
      <Container>
        <Link to='/' style={{ 
          display:'flex', 
          textDecoration:'none', 
          itemAlign:'start',
          marginTop: '50px',
          fontSize: '72px',
          fontWeight: 'bold',
          color: '#000000'
          }}>
            SAPIÊNCIA</Link>
      </Container>
      <Container style={{ 
          display: 'flex',
          textDecoration: 'none',
          justifyContent: 'space-between'
          }}> 
        <h3 style={{ color: 'grey' }}>Um blog sobre diversas áreas do conhecimento humâno</h3>   
        <Link to='/about' style={{ textDecoration: 'none', color: 'grey' }}>About</Link>
      </Container>
      <Container>
        <hr className='line'/>
      </Container>
    </div>
  );
}