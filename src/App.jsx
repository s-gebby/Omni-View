import { useState } from 'react'

export default function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <section>
        <header className='flex text-3xl items-center justify-center p-4'>Interior<span className='text-red-500'>View</span></header>
        <main>

          <div className='flex flex-col items-center justify-center'>
            <h1>Welcome! I am implementing a 360 degree panoramic view for the inside of a car or helicopter.</h1>
          </div>

        </main>
      </section>
      <footer>
        
      </footer>
    </div>
  )
}