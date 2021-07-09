import React, { Component } from 'react'
import './index.css'


const renderNoteValue = (noteValue) => {
    if (noteValue.length === 3)
        return <span>{noteValue[0]}<sup className="sharp">♯</sup>{noteValue[2]}</span>;
    return <span>{noteValue}</span>;
}

export default class Note extends Component {

    generateColor = (noteValue) => {
        function intFromNote(note) {
            // 返回字符串首个字符的Unicode编码，不写index就是返回首位
            /* 
              A  B  C  D  E  F  G
              65 66 67 68 69 70 71 
            */
            let output = note.charCodeAt();
            // 为什么要遇到AB加7，因为音律排列不是abcdefg，是cdefgab
            /* 
              C  D  E  F  G     A       B  
              67 68 69 70 71 65+7=72 66+7=73
              即是
              C  D  E  F  G  A  B  
              67 68 69 70 71 72 73
          
            */
            if (note === 'A' || note === 'B')
                output += 7;

            // 然后再减去66，从1开始算

            /* 
              C  D  E  F  G  A  B  
              1  2  3  4  5  6  7
            */
            output -= 66;
            return output;
        }

        // noteValue要么是C2这种音符，要么是rest休止符

        // 如果是rest休止符，那么颜色是蓝绿色
        if (noteValue === 'rest')
            return '#4C9393';

        // 5个八度音阶，分为23456，比如C2、D2、C3、D3等，后面的数组是先确定好的rgb值
        const octaveColors = {
            2: [50, 60, 120],
            3: [70, 50, 100],
            4: [100, 40, 70],
            5: [120, 30, 10],
            6: [170, 50, 0]
        };

        // 取C2这种字符串的第一位字符C，然后intFromNote(C)输出1,确定当前note是八度音中具体哪一个音，duo、ruo、mi==C、D、E=1、2、3
        // 对应如下，所以会输入一个7以内的数，然后去对应上面的rgb表
        /* 
        C  D  E  F  G  A  B  
        1  2  3  4  5  6  7
      */
        const note = intFromNote(noteValue[0]);

        // 确定是哪一个八度音，比如C2的2，就是低音C4就是正常的音调，C6就是高音
        const octave = noteValue[noteValue.length - 1];

        // 上色，根据octave，选出rgb数组，比如2: [50, 60, 120]的[50, 60, 120],然后+ (note * 10)
        // 比如如果是C2的话就是[50+10, 60+10, 120+10] 即 [60, 70, 130]
        const color = octaveColors[octave].map(colorValue => colorValue + (note * 10));

        return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }




    render() {
        const { value, active } = this.props
        let color = '#F4A53F'

        if (!active) color = this.generateColor(value)
        return (
            <div className='note' style={{ backgroundColor: color }}>
                {renderNoteValue(value)}
            </div>
        )
    }
}
