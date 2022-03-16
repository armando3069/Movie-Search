import React from 'react'
import { movie } from '../../movie'
import not from '../assets/img/girl.png'

import Items from './movie-item/movieItems'
import './movie.css'
function movieS({moviee}) {
  return (
    <div className='m' >
   
     {moviee == '' ?  <div><h1>Nu se găsește</h1> <img className='img'  src={not}/></div> :
    moviee?.map((item,index)=>(
    
      <Items 
      key={index}
      id={item.id}
      title={item.title}
      desc={item.describtion}
      img={item.img}
      />
      
  ))
    }

    </div>
  )
}

export default movieS

/*
          <Items 
          id={item.id}
          title={item.title}
          desc={item.describtion}
          img={item.img}
          />
*/