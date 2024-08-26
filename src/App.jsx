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
        <div className='w-1/2 p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg m-4'>
          <h2 className='text-4xl mb-4 text-blue-600 p-4'>Welcome</h2>
          <p className='text-medium p-4 text-white'>
            Explore our interactive panorama on the right. This demonstrates how to use the <span className='hover:animate-mystic-aura'>react-pannellum</span> library to create an immersive 360-degree panorama view.
          </p>
            <div>
            <p className='flex-row p-4 text-medium text-white'>
              <span className='hover:animate-mystic-aura'>React-Pannellum</span> is a powerful library for creating immersive 360-degree panorama views. It allows you to seamlessly integrate interactive 360-degree panoramas into your web applications.
            </p>
          </div>
        </div>
        <div className='w-1/2 h-[600px] border-8 border-white'>
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