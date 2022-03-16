import React,{useState} from 'react'
import img from '../assets/img/search.svg'
import { movie } from '../../movie'
import Mov from '../movie/movie.jsx'
import './search.css'

function search() {
  const[input,setInput] = useState('');
  const[search,setSearch] = useState('');
  
 
   const add = (date) =>{
     
     return  date.filter((item) =>  item.title.toLowerCase().includes(input));

   };

  return (
      <div>
      
    <div className='s'>

    <div className='s-search'>
    <input id='inp' onChange={(e)=>setInput(e.target.value.toLowerCase())}  />
    <img id='img' src={img} onClick={ () => setSearch(input)}  />
    </div>
  
    </div>
  

    <div >
     
    {<Mov moviee={add(movie)} />}
    </div>
  
      {console.log(input)}
    </div>
  )
}

export default search

//  {<Mov video={add(Movie)} />}