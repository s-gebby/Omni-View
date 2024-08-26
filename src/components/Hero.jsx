

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row gap-8 items-center justify-center text-left w-full mx-auto p-6'>
      <div className='flex flex-col gap-8 max-w-[600px] bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg'>
        <div className='flex flex-row gap-4'></div>
        <h1 className='uppercase font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
          <span className='text-blue-600'>Omni-View Explorer</span>
        </h1>
        <p className='text-base sm:text-lg md:text-xl font-semibold text-white'>
          This is meant to showcase the ability to implement{' '}
          <span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-transparent'>
            Pannellum
          </span>{' '}
          in{' '}
          <span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-transparent'>
            React!
          </span>
        </p>
      </div>
      <div className='mt-8 md:mt-0'>
        <h2 className='text-xl sm:text-2xl font-bold mb-4 text-blue-600'>Connect with me</h2>
        <div className='flex flex-col gap-4'>
          <a
            href="https://github.com/s-gebby"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors text-center'
          >
            GitHub
          </a>
          <a
            href="https://x.com/SilasGebhart"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors text-center'
          >
            X
          </a>
          <a
            href="https://www.silasgebhart.com/"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors text-center'
          >
            Portfolio
          </a>
        </div>
      </div>
    </div>
  )
}