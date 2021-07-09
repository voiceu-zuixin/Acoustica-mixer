import React, { Component } from 'react'
import KeyBoard from '../keyboard'
import NoteInKeyboard from '../note-in-keyboard'
import './index.css'

export default class NoteColumn extends Component {
    render() {
        return (
            <div className="note-column">
                <div className="rest-box">
                    {/* 这里的value传的是rest */}
                    <NoteInKeyboard value="rest" />
                </div>
                {/* 这里面会给其中的Note传C4等音符名 */}
                <KeyBoard />
            </div>
        )
    }
}
