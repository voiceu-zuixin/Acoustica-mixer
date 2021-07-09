import React, { Component } from 'react'
import NoteInKeyBoard from '../../note-in-keyboard'
// import '../index.css'

export default class NaturalOctave extends Component {

    
    render() {
        const naturals = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
        return naturals.map((value,i)=>{
            return(
                <NoteInKeyBoard value={`${value}${this.props.octave}`} key = {i}/>
            )
        })
    }
}
