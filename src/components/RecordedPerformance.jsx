import React from 'react'
import euph from '../assets/euph.jpg'

const RecordedPerformance = () => {
  return (
    <div name="Recorded Performance" className="w-full h-screen bg-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Recorded Performance - Sungyu Kwon</p>
            </div>
            {/*mt means margin top*/}
            <div className='flex flex-row justify-center'>
                <img className="object-scale-down h-48 w-48" src={euph} alt="" />
            </div>
            <p className='text-xl mt-5'>
                The Recorded Perfromance Componet showcases Sungyu Kwon playing the Euphonium. The Euphonium is a medium-sized, 3 or 4-valve brass instrument. 
                It looks like a smaller tuba, but plays notes that are higher pitched than a tuba. Sungyu first started playing the Euphonium in second grade and played 
                it all throughout highschool. The effects that were implemented for this component are the Noise Gating and Compression. By utalizing
                Noise Gating, we are able to eleminate the sounds of Sungyu taking breaths while performing the instrument. 
            </p>

            <br/>
        </div>
    </div>
  )
}

export default RecordedPerformance