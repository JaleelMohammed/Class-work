// import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
// import Page from './Page'
import About from '../components/About/About.jsx'
export default function Exp() {
  return (

      <>
     <Router>
            <li>
              <Link to="/abt"> <a href="">abotut</a></Link> 
                </li>
<ul>
            <li>contact</li>
        </ul>
        


        
    
    <Routes>
        <Route path='/abt'element={<About/>}></Route>
        </Routes>
        </Router>
        </>
  )
}
