import React from 'react'
import SoundWaveClipArt from '../assets/SoundWave.png'

//Via is the midpoint for the gradient
const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b via-black from-black to-gray-800 text-white">
         <div className="max-w-screen-lg mx-auto items-center justify-center
             h-full px-4 md:flex-row">
                   {/**<img src={SoundWaveClipArt} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full -z-20"/>*/}
             <div className='flex flex-col justify-center h-full z-10'>          
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    CSE 471 Project 1
                </h2>
                <p className="text-gray-500 py-4 text-2xl">
                     By : Alexis Morse, Sungyu Kwon, Griffin Frendo, Yu Chen, Blake Sabbagh

                </p>
              </div>
         </div>
    </div>
  )
}

export default Home