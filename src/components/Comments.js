import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Comments = () => {
  const schema = yup.object().shape({
    comment: yup.string().required("O campo comentário está vazio")
  })   
  
  const { register, handleSubmit } =  useForm({
    resolver: yupResolver(schema)
  })

  const onCreateComment = (data) => {
    console.log(data)
  }
    
  return (
    <form onSubmit={handleSubmit(onCreateComment)}>
        <textarea placeholder='Faça um comentário' {...register('comment')}/>
        <input type='submit'/>
    </form>
  )
}

export default Comments
