import React from 'react'
import search from '../assets/search.jpg'
import Getdata from '../components/Getdata'
import { useState } from 'react';
 

export default function Home() {

  const [query, setQuery] = useState('Trending Games');
const[searchbool,setSearchbool]=useState(false);

  // For programmatic navigation

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

   
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchbool(!searchbool);
 
    }
  }
 
  

  return (
    <div>  
     <div 
  style={{ background: `linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.15)), url(${search})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
  className='relative moving-border-container flex items-center justify-center h-[80vh] sm:h-[60vh] md:h-[70vh] shadow-2xl shadow-slate-950 m-10 sm:mx-12 md:mx-16 lg:mx-24 rounded-2xl p-3'
>
  <div className='text-center z-10'>
    <span className='text-4xl sm:text-5xl md:text-6xl textglow mb-8 sm:mb-12 lg:mb-16 block'>Games That We Live For</span>
    <div className='w-full max-w-md p-2 m-3 flex items-center gap-x-2 rounded-xl shadow-md shadow-slate-950 dark:bg-gray-800 dark:text-dark-text bg-gray-300 text-light-text mx-auto'>
      <span className='text-xl sm:text-2xl p-1'>
        <ion-icon name="search" />
      </span>
      <input
        type='text'
        value={query}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
        placeholder="Search for games"
        className='w-full p-2  bg-transparent placeholder:text-gray-200 outline-none'
      />
    </div>
  </div>
</div>



<Getdata query={query} searchbool={searchbool}/>
 
  

  
  </div>
  
  )
}
