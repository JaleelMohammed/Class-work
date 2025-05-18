import React, { useState } from 'react'
import './Navbar.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Page from '../Page.jsx'
import About from '../About/About.jsx'
import Contact from '../Contact/Contact.jsx'
import Gallery from '../Gallery/Gallery.jsx'
import Main from '../Main.jsx'
function Navbar() {

    const[visible,setVisible] =useState(false);

  return (
    <>
      <Router>
        
      
        <nav>
            
        <ul className="side-bar" style={{display: visible?'block':'none'}}>
        <li> <a  className='x' onClick={()=>setVisible(false)}>x</a></li>
        <li><a className='links'>Home</a></li>
        <li> <a className='links'>About</a></li>
        <li><a className='links'>Contact</a></li>
        <li><a className='links'>Gellery</a></li>
        <li><a className='links'>Account</a></li> 

        </ul>
        <ul>
            <li><a className='logo'>React-Developer</a></li>
            <li><a className="hide-mobile"><Link to='/'>Home</Link></a></li>
            <li><a className="hide-mobile"> <Link to='/about'>About</Link></a></li>
            <li><a className="hide-mobile"><Link to='/contact'>Contact</Link></a></li>
            {/* <li><a className="hide-mobile"><Link to='/accout'>Account</Link></a></li> */}
            <li><a className="hide-mobile"> <Link to='/page'>Page</Link></a></li>
             <li><a className="hide-mobile"><Link to='/gallery'>Gallery</Link></a></li>
             <li><a className='hide-mobile btn'>Join class</a></li>
            <li><a  className="menu" ><span className="material-symbols-outlined" onClick={()=>setVisible(true)}>menu</span></a></li>
            </ul>
    </nav>
      
     q
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      {/* <Route path='/account' element={<Account/>}></Route> */}
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/page' element={<Page/>}></Route>
    </Routes>
      
      </Router>
      
      </>
    
    
  )
}

export default Navbar