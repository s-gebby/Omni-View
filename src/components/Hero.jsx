import React from 'react'

export default function Hero() {
    return (
      <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center [max-w-600px] w-full mx-auto p-6'>
          <div className='flex flex-col gap-4'></div>
  
          <p>Welcome</p>
          <h1 className='uppercase font-semibold text-4xl
          sm:text-5xl md:text-6xl
          lg:text-7xl'><span className='text-red-900'>360 Degree View</span></h1>
          <p className='text-sm md:text-base font-light'>This is meant to showcase the ability to impliment<span className='text-red-600 font-medium'> Pannellum</span> in <span className='text-red-600 font-medium'> React!</span>
          </p>
      </div>
    )
  }
