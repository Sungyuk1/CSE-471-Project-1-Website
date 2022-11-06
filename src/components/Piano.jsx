import React from 'react'

const RecordedPerformance = () => {
  return (
    <div name="Piano" className="w-full h-screen bg-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Piano - Alexis Morse</p>
            </div>
            <p>
            The first big changes were adding terms to the score file so I could implement the pedal and the dynamics portion. Then from there I created the envelope, pedal, and dynamics. I attempted to create these features to make the piano sound of London Bridge is Falling Down. However, after hours of debugging, I learned that the .wav files (provided by the Piano.zip file) were what was causing my code to crash. I am stuck from here. Below is my thought process per file.</p>

            <p>Piano Envelopes- Piano keys have a distinct sound because of the way sound is attacked and released. I used that concept because for each note you have to attack and release to give the sound of a piano. The gain is what allows the notes to not be a cutoff sound. I tried to combine the idea when you have the pedal pressed to also not forget to envelope the note while sustaining. From there I started to build my piano instrument </p>

            <p>Piano Instrument - This is where I used envelope on every note within my piano instrument. I apply the piano envelope to each frame and established attack and release. I run through m_pianonote which is used as the source for m_envelope. I used SetNote to be able to read the note and duration from the source file. PianoInstrument is connected to PianoSampleWave and PianoEnvelopes. PianoInstrumentSynth is used within PianoInstrument so my files should all cohesively connect.  </p>

            <p>PianoSampWave - I had to implement this to get the sample when the pedal is used. If the pedal is used then you have to increase the pedal count and stop once your pedal count is the same size as the pedal wave. I added the m_pedalwave (the pedal sound) that pulls values from the m_instrument. It connects the pedalPress and pedalRelease sound so the program knows when you add the pedal sounds to the frames. The concept of duration and amplitude confused me so I might have created too many setters for frequency and amplitude. </p>

            <p>PianoInstrumentSynth - I incorporated my pedal and piano attack and release sound with my interpolation. My biggest issue was getting my sounds to work. I think thats what threw off my entire project. You can see I had to comment out all the load in files because no method of loading in would work. I struggled with connecting the pedal sound to the timing of the sample. I used pedalPress and pedalRelease to identify when to stop applying the pedal sound in the sample. I also implemented my interpolate with the dynamic. I struggled with how to connect the sound to a variable I could use in order to calculate the interpolation. Understanding interpolation was hard as well. I used the loud and the soft sound in order to create a new interpolated sound. I used SetNote to be able to know when to use the pedal/dynamic based off of the words “pedal” and “dynamic” in the score file.</p>
    </div>
</div>
  )
}

export default RecordedPerformance