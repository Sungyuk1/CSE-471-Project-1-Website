import React from 'react'

const Team = () => {
  return (
    <div name="Team" className="w-full h-screen bg-gradient-to-b via-black
    from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Our Team</p>
            </div>
            {/*mt means margin top*/}
            <p className='text-xl mt-5'>
                Our Team consisted of 5 People : Alexis Morse, Sungyu Kwon, Griffin Frendo, Yu Chen, Blake Sabbagh. We are all Seniors Studying at Michigan State University
            </p>
        </div>
    </div>
  )
}

export default Team