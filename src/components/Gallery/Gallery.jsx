import React from 'react'
import './Gallery.css'
import p1 from '../../assets/product-5.jpg'
import p2 from '../../assets/product-6 - Copy.jpg'
import p3 from '../../assets/product-4 - Copy.jpg'
import p4 from '../../assets/category-1 - Copy.jpg'
import p5 from '../../assets/buy-3 - Copy.jpg'
import p6 from '../../assets/category-3 - Copy.jpg'
import p7 from '../../assets/product-12.jpg'
import p8 from '../../assets/exclusive.png'



export default function Gallery() {
  return (
    <div>
      
        <div className='section2'>
        <img src={p1} alt=""/>
        <img src={p2}alt=""/>
        <img src={p3} alt=""/>
        <img src={p4}alt=""/>
        <img src={p5} alt=""/>
        <img src={p6} alt=""/>
        <img src={p7} alt=""/>
        <img src={p8} alt=""/>
        <button>Get to Know Us Better!</button>
    </div>
    </div>
  )
}
