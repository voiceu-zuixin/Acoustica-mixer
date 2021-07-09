import React, { Component } from 'react'
import NoteInKeyBoard from '../../note-in-keyboard'
// import '../index.css'



export default class AccidentalOctave extends Component {

    renderAccidentals = (arr) => {
        return (
            <div className={`keyboard-acc${arr.length}`} key={arr.length - 2}>
                {
                    arr.map((value, i) => <NoteInKeyBoard value={`${value}${this.props.octave}`} key={i} />)
                }
            </div>
        )
    }
    render() {
        const accidentalOctaves2 = ['C#', 'D#']
        const accidentalOctaves3 = ['F#', 'G#', 'A#']
        return [
            this.renderAccidentals(accidentalOctaves2),
            this.renderAccidentals(accidentalOctaves3)
        ]
    }
}
