import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
      const {id} = useParams()
    return (
    <div>
        <h2>User Details</h2>
        <p>User deyails : {id}</p>
    </div>
  )
}
