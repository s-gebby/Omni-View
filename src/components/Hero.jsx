import React from 'react'

export default function Hero() {
    return (
      <div className='min-h-screen flex flex-col gap-10 items-left justify-center text-left [max-w-600px] w-full mx-auto p-6'>
          <div className='flex flex-col gap-4'></div>
  
          <p>Welcome</p>
          <h1 className='uppercase font-semibold text-4xl
          sm:text-5xl md:text-6xl
          lg:text-7xl'><span className='text-red-900'>360 Degree View</span></h1>
          <p className='text-sm md:text-base font-light'>This is meant to showcase the ability to impliment <span className='text-red-600 text-lg'
          > Pannellum</span> in <span className='text-red-600 text-lg'> React!</span>
          </p>
      </div>
    )
  }
