import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from "./Home"
import Users from "./Users"
import UserDetails from "./UserDetails"

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<UserDetails/>}/>
      </Routes>
    </div>
  )
}
