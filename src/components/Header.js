import * as React from 'react'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import { auth } from '../db/FbConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'


export default function ButtonAppBar() {
  const [user] = useAuthState(auth)

  const signUserOut = async () => {
    await signOut(auth); 
  }

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
        <div>     
          <h3 style={{ color: 'grey' }}>Um blog sobre diversas áreas do conhecimento humâno</h3>
        </div>
        <div>
          <Link to='/about' style={{ textDecoration: 'none', color: 'grey' }}>About</Link>
            <div>
            {user ? 
              <>
                <p>{user?.displayName}</p>
                <img src={user?.photoURL || ""} /> 
                <button onClick={signUserOut}>Sign out</button>
              </> 
              : <Link to='/login' style={{ textDecoration: 'none', color: 'grey', paddingRight: '20px' }}>Login</Link>
            }
          </div>    
        </div>
      </Container>
      <Container>
        <hr className='line'/>
      </Container>
    </div>
  );
}