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
      <main className='w-full flex flex-col md:flex-row items-center md:items-start justify-between'>
        <div className='w-full md:w-1/2 p-4 md:p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg m-4 md:m-16'>
          <h2 className='text-3xl md:text-4xl text-blue-600 p-2 md:p-4'>Project Overview</h2>
          <p className='text-medium md:text-medium p-2 md:p-4 text-white'>
          This project was created to provide users with an immersive experience, allowing them to explore environments in a more engaging and interactive way. The idea stemmed from the need to view the interior of cars, planes, and helicopters in a way that offers a comprehensive view without physically being there. Traditional images and videos often fail to capture the full essence of a location, which is where a 360-degree panoramic view can make a significant difference.
          </p>
          <h2 className='text-base md:text-xl text-amber-300 py-1 md:py-2 px-2 md:px-4'>Technical Implementation</h2>
          <div>
            <p className='flex-row p-2 md:p-4 text-medium md:text-medium text-white'>
            The application leverages a modern tech stack, including HTML5, TailwindCSS, and React.js, to create a responsive and visually appealing interface. The application uses Pannellum, a lightweight, standalone JavaScript library specifically created for rendering 360-degree panoramas.
            </p>
            <p className='flex-row p-2 md:p-4 text-medium md:text-medium text-white'>
            The application is entirely frontend-based, with all static assets served directly from a web server, ensuring fast load times and an efficient user experience. The project is deployed on Netlify, taking advantage of its continuous deployment and global CDN for fast content delivery. Version control is managed using Git, with the repository hosted on GitHub, allowing for easy collaboration and automatic updates.
            </p>
          </div>
        </div>
        <div className='w-full md:w-1/2 h-[300px] md:h-[600px] p-4 md:p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg m-4 md:m-12'>
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