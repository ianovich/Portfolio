import React from 'react'
import html5 from '../assets/html5.png'
import tailwind from '../assets/tailwind-css.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import wordpress from '../assets/wordpress.png'
import sql from '../assets/sql.png'
import javascript from '../assets/javascript.png'
import github from '../assets/github.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/*container*/}
    <div className='max-w-[1000px] max-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
<p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
<p className='py-4'>//These are the technologies that i have worked and interacted with</p>
      </div>
    
    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
      <div className='shadow-md shadow-[#ffb6c1] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={html5}alt="HTML icon"/>
        <p className='my-4 font-bold'>HTML</p>
      </div>
      <div className='shadow-md shadow-[#ffb6c1] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={css}alt="HTML icon"/>
        <p className='my-4 font-bold'>CSS</p>
      </div>
      <div className='shadow-md shadow-[#ffb6c1] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={tailwind}alt="HTML icon"/>
        <p className='my-4 font-bold'>TAILWIND</p>
      </div>
      <div className='shadow-md shadow-[#ffb6c1] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={react}alt="HTML icon"/>
        <p className='my-4 font-bold'>REACT JS</p>
      </div>
      <div className='shadow-md shadow-[#ffb6c1] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={wordpress}alt="HTML icon"/>
        <p className='my-4 font-bold'>WORDPRESS</p>
      </div>
        <div className='shadow-md shadow-[#ffb6c1] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={sql}alt="HTML icon"/>
        <p className='my-4 font-bold'>SQL</p>
      </div>
      <div className='shadow-md shadow-[#ffb6c1] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={javascript}alt="HTML icon"/>
        <p className='my-4 font-bold'>JAVASCRIPT</p>
      </div>
      <div className='shadow-md shadow-[#ffb6c1] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={github}alt="HTML icon"/>
        <p className='my-4 font-bold'>GITHUB</p>
      </div>
      </div>
  
      </div>
      </div>
      
      
  );
};

export default Skills