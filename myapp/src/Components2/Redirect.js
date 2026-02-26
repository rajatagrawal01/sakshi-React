import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import User from "./User.js";

export default function Redirect() {
  return (
    <div className='container'>
        <nav>
            <Link to="/Home">Home</Link><br/>
            <Link to="/About">About</Link><br/>
            <Link to="/Contact">Contact</Link>
        </nav>
        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path="/user/:id" element={<User />} />
        </Routes>
    </div>
  )
}