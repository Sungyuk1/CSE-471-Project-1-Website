import React from 'react'
import img1 from '../assets/music1.png'
import img2 from '../assets/image2.png'

const Selection = () => {
  return (
    <div name="Selection" className="w-full h-screen bg-gradient-to-b via-black
    from-black to-gray-800 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>The Selection</p>
            </div>
            {/*mt means margin top*/}
            <p className='text-xl mt-5'>
                
            </p>
            <img className="object-scale-down h-96 w-96"src={img1} alt="" />
            <br/>
            <img className="object-scale-down h-96 w-96" src={img2} alt="" />
            
        </div>
    </div>
  )
}

export default Selection