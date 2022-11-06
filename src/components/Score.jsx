import React from 'react'

const Score = () => {
  return (
    <div name="Score" className="w-full h-screen bg-gray-800 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>The Score</p>
            </div>
            {/*mt means margin top*/}
            <p className='text-xl mt-5'>
            The score file is a combination of Mary Had a Little Lamb for the first 15 measures. This song has ADSR and CrossfadeIn and CrossFadeOut. Also in measures 7 and 8 the additive effect vibrato was added. The next song is London Bridge is Falling Down.  The song is a total of 61 seconds long. (Piano and Recorded Performance had to be excluded because if included it would have caused an error).

            </p>

            <br/>
        </div>
    </div>
  )
}

export default Score