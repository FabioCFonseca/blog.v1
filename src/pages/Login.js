import React from 'react'
import { auth, provider} from '../db/FbConfig'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate() 
   
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    navigate('/')
  }

  return (
    <div>
      <p>Sign In</p>
      <button onClick={signInWithGoogle}>Sign in</button>
    </div>
  )
}

export default Login
