import React from 'react'

const WaveTable = () => {
  return (
    <div name="WaveTable" className="w-full h-screen bg-gradient-to-b via-black from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>WaveTable - Yu Chen</p>
            </div>
            {/*mt means margin top*/}
            <p>Created own sounds: DO, RE, MI, FA, SOL, LA, TI</p>
            <p>Measure 1 - 2: Origin sounds of the notes</p>
            <p>Measure 3 : Envelope: ADSR
                They are 0.5 seconds notes but all the four levels of
                the sounds: Up, Down, Sustain, Fading out.
                I also make the measure 4, which is the origin sounds
                with the same frequency with measure 3 to compare
                the difference of these two measures.
                There’s a longer version of ADSR play at the end of the
                sounds for telling the sounds change of four levels
                (ADSR) better.</p>
                <p>Measure 5 - 6: Attack and Sustain :Attack sounds at the beginning of
notes and sustain. Can clearly hear the sounds of
hitting the instrument by changing the amplitude and
frequency of the wav.</p>

             <p>
             Measure 7 - 8: Origin sounds of the notes
             </p>

             <p>
             Measure 9 - 12: Instrument attacking sounds showing again (With no
Sustain this time) To generate the hitting sounds more
clearly.
             </p>

             <p>Measure 13 - 15: Cross FadeIn and FadeOut : The sounds of A’s end is
overlapping with the sounds of B’s beginning. Using
Cross FadeIn and FadeOut to making the sounds
transfer smoothly.</p>

<p>Measure 16 - 17: Pitch for testing 2^(1/6) and 2^(3/6) In my score file.
The Input Notes are all “DO” by using different Pitch
to speed up the frequency of the sounds. The input is
“DO” but the frequency will generate the sounds more
like “MI” and higher frequency sounds by implementing
a different Pitch on it.
Generated Sound frequency = Input frequency * Pitch</p>

<p>
Measure 18: : Better audio to Identify the Envelope: ADSR
For making a better identification of the 4 levels of
sounds: Attack, Decay, Sustain and Release by using
longer notes.
</p>
            
        </div>
    </div>
  )
}

export default WaveTable