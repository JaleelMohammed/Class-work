import React from 'react'
import './About.css'
import gallery from '../../assets/image1.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-3.png'


export default function () {
  return (

    <div>
    
         <div className='section1'>
        <div className="para1">
            <h2>Enriching and Fun Early Years <br/> Matter Preschool Carriculum</h2>
            <br/>
            <hr/>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magnam distinctio in reprehenderit repellendus veniam quos illo commodi at, odit fugiat nostrum, voluptas numquam dolor! Id excepturi, minima obcaecati placeat sed error veritatis accusantium eos officiis facilis ab nemo reiciendis tempora! Ad dolores similique iure!</p>
            
        </div>
        
            <img className='gallery' src={gallery} alt="gallery"/>
        

            <img className='im3' src={user1} alt="hhh"/>
        
        <div className="para2">
            <h2>Social-Emotional & Physical <br/>Development</h2>
            <br/>
            <hr/>
            <br/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus tempora harum dolore ut incidunt et. Molestias doloremque laboriosam delectus necessitatibus doloribus consequuntur nihil fuga officia!</p>
        </div>
        <div className="para3">
            <h2>Milestones Tracking and <br/> Regular Assessments</h2>
            <br/>
            <hr/>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed natus possimus repudiandae beatae velit quas consequuntur quod corporis repellat laudantium. Autem dolor vel eaque, eum ut laudantium voluptatem illum. Sapiente.</p>
        </div>
        
             <img src={user2} alt="hhvh"/> 
        
    </div>
    </div>
  )
}
