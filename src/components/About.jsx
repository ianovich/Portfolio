import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-600'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
        <p className='text-4xl text-white font-bold inline border-b-4 border-pink-600'>About</p>
        </div>
        <div></div>
        </div>
          <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm: text-right text-4xl font-bold'>
            <p className='text-white'>Hi I'm Ian,It is a pleasure meeting you.Please take a look around</p>
          </div>
          <div>
            <p>Hello! I'm Ian, an experienced developer with a passion for crafting exceptional web experiences. With 2 years of industry experience, I specialize in full stack development, with a focus on front-end technologies.
Throughout my career, I have successfully delivered robust and user-friendly web solutions for a diverse range of clients and industries. I possess extensive knowledge in HTML, Tailwind CSS, JavaScript, and have hands-on experience with popular framework such as React .</p>
          </div>
        </div>
        </div>
        </div>
        
  )
}

export default About