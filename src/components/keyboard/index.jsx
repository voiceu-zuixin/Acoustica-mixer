import React, { Component } from 'react'
import AccidentalOctave from './accidentalOctave'
import NaturalOctave from './naturalOctave'
import './index.css'


export default class Keyboard extends Component {
    render() {
        return (
            <div className='Keyboard'>
                <div className='keyboard-notes'>
                    {/*  keyboard写成了大写导致样式无法正确配置，以后尽量复制*/}
                    <div className='keyboard-col'>
                        <NaturalOctave octave={2} />
                        <NaturalOctave octave={3} />
                        <NaturalOctave octave={4} />
                        <NaturalOctave octave={5} />
                        <NaturalOctave octave={6} />
                    </div>
                    <div className='keyboard-col'>
                        <AccidentalOctave octave={2} />
                        <AccidentalOctave octave={3} />
                        <AccidentalOctave octave={4} />
                        <AccidentalOctave octave='5' />
                        <AccidentalOctave octave='6' />
                    </div>
                </div>
            </div>
        )
    }
}
