import React, { useState } from 'react'
import '../components/Navbar.css'
function Navbar() {

    const[visible,setVisible] =useState(false);

  return (
    <div>
        <nav>
            
        <ul className="side-bar" style={{display: visible?'block':'none'}}>
        <li> <a  className='x' onClick={()=>setVisible(false)}>x</a></li>
        <li><a className='links'>Home</a></li>
        <li><a className='links'>About</a></li>
        <li><a className='links'>Contact</a></li>
        <li><a className='links'>Gellery</a></li>
        <li><a className='links'>Account</a></li>      
        </ul>
        <ul>
            <li><a className='logo'>React-Developer</a></li>
            <li><a className="hide-mobile">Home</a></li>
            <li><a className="hide-mobile"> About</a></li>
            <li><a className="hide-mobile">Contact</a></li>
            <li><a className="hide-mobile">Account</a></li>
            <li><a className="hide-mobile"> Gellery</a></li>
             <li><a className='hide-mobile btn'>Join class</a></li>
            <li><a  className="menu" ><span className="material-symbols-outlined" onClick={()=>setVisible(true)}>menu</span></a></li>
            </ul>
    </nav>

    </div>
  )
}

export default Navbar