import React,{ useState,useEffect } from 'react'
import Movie from './components/movie/movie'
import Search from './components/search/search'
import './App.css'
import AOS from 'aos';
import "aos/dist/aos.css";



function App() {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
    <h1 className='a-title' >Movie Land</h1>
    <Search/>
    <Movie/>
    </div>
  )
}

export default App
