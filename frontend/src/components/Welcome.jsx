import React from 'react'
import { useSelector } from 'react-redux'

const Welcome = () => {
  const {pemilik} = useSelector((state)=> state.auth);
  return (
    <div>
        <h1 className='title'>Dashboard</h1>
        <h2 className='subtitle'>Welcome Back {pemilik && pemilik.name}</h2>
    </div>
  )
}

export default Welcome