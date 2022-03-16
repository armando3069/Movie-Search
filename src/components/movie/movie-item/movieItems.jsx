import React from 'react'
import './movieItems.css'
function movieItems({title,desc,img,id}) {
  return (
    <div className='m' data-aos="zoom-in-up">
    <div className='m-container' >
    <img className='m-img' src={img} />
    <div className='m-wrapper'>
    <h3 className='m-title'>{title}</h3>
    <h3 className='m-desc'>{desc}</h3>
    </div>
    </div>
  
    </div>
  )
}

export default movieItems