import React from 'react'

const Effects = () => {
  return (
    <div name="Effects" className="w-full h-screen bg-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Effects - Blake Sabbagh</p>
            </div>
            {/*mt means margin top*/}
            <p className='text-xl mt-5'>
            There were four individual effects included in this component which utilize controllable effect sends. Reverb was the first effect and was implemented by passing a previous frame in the queue to the current frame, and adding a decay to it to modify and make the new sound. This was then sent to the wet signal which outputs back to the instrument chain. The flanging effect was implemented by creating a moving decay on the wet signal. The compression/limiting effect limits the sound at a particular decibel specified in the score. The final effect is noise gating which stops all noise under a certain decibel specified by the score from being sent to the wet signal.
            </p>

            <br/>
        </div>
    </div>
  )
}

export default Effects