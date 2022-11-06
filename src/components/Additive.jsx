import React from 'react'

const Additive= () => {
  return (
    <div name="Additive" className="w-full h-screen bg-black text-white pb-20">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Additive - Griffin Frendo</p>
            </div>
            <p className='text-xl mt-5'>
            Measure 1 : standard waves <br/>
            Measure 2 and 3 : Fade In and Fade Out: The idea of sound cross-fading is that you generate a single
            note from more than one set of sound definitions. You might start with note with sound A, then
            gradually change to sound B by interpolating between them. Cross-fading allows for richer sounds,
            since the sound varies over its period. <br/>
            Measure 4: Polyphony: Polyphony simply means playing more than one note at a time. When you strum
            a guitar, you are playing six notes at a time. Polyphony means being able to start and stop more than
            one note at the same time. <br/>
            Measure 5: Vibrato: Vibrato is a musical effect where the frequency of the note is varied repeatedly up
            and down. It's a common effect in both voice and instruments <br/>
            Measure 6: ADSR : How an instrument starts the sound and sustains it varies, but usually has a volume
            characteristic to it. An example, a violin may slowly start the sound of a note or quickly start it for
            different songs. This is called an "attack". Many instruments have a rapid decay after the attack, then
            sustain at another level, only to gradually decay at the end. In all cases for a wavetable synthesis
            component you will need to be able to fade the sound at the end over several milliseconds to avoid a
            "pop".
            Each measure has a amplitude sound definition.
            </p>

            <br/>
            
        </div>
        <br/>
    </div>
  )
}

export default Additive