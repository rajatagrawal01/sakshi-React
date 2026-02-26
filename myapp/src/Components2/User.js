import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {

  const { id } = useParams()
  
  return (
    <div>
      <h2>User Page</h2>
      <h3>User ID: {id}</h3>
    </div>
  )
}
