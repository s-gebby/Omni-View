import { useState, useEffect } from 'react'
import ReactPannellum from "react-pannellum";
import Hero from './components/Hero'


export default function App() {
  const [scene] = useState({
    image: "https://images.unsplash.com/photo-1505252772853-08ed4d526ceb?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pitch: 10,
    yaw: 180,
    hfov: 150,
    autoLoad: true
  })
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <Hero />
      <main className='w-full flex flex-row items-start justify-between'>
        <div className='w-1/2 p-4'>
          <h2 className='text-4xl mb-4'>Welcome to our 360° View</h2>
          <p className='text-lg'>
            Explore our interactive panorama on the right. This demonstrates how to use the react-pannellum library to create an immersive 360-degree panorama view.
          </p>
        </div>
        <div className='w-1/2 h-[600px]'>
          {mounted && (
            <ReactPannellum
              id="pannellum-container"
              sceneId="firstScene"
              imageSource={scene.image}
              config={{
                autoLoad: true,
                pitch: scene.pitch,
                yaw: scene.yaw,
                hfov: scene.hfov,
              }}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          )}
        </div>
      </main>
    </div>
  )
}