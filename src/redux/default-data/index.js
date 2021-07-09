import { v4 as uuidv4 } from 'uuid'

// mario的初始滤波器，里面是提前设置好的一种效果，是tone.js内置的
export const defaultFilter = () => ({
    // 频率
    frequency: 20000,
    type: 'lowpass',
    // 共振率
    resonance: 1
});

// mario的初始合成器
export const defaultSynth = () => ({
    // 振荡器
    oscillator: {
        // 振荡器类型
        type: 'triangle',
        // 去谐率
        detune: 0
    },
    // 封装器 envelope 是一个ADSR封装器发生器。
    // 封装器输出一个可以连接到AudioParam或Tone.signal的信号。
    envelope: {
        attack: 0.005,
        // 衰减率
        decay: 0.1,
        // 持续，延音效果
        sustain: 0.3,
        // 释放？啥意思
        release: 1
    }
});

export function starterData() {
    const id1 = uuidv4();
    // const id2 = uuidv4();
    return {
        bpm: 100,
        name: 'New Project',
        playing: false,
        testNote: { on: false, value: '' },
        shared: false,
        tracks: {
            //   加[]括号是为了动态的id1
            [id1]: {
                name: 'Track 1',
                sequence: [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
                nextId: 9,
                baseNote: 4,
                id: id1,
                muted: false,
                soloed: false,
                currentNote: [],
                volume: -8,
                synth: defaultSynth(),
                filter: defaultFilter()
            },
            // [id2]: {
            //     name: 'Track 1',
            //     sequence: [
            //         [],
            //         [],
            //         [],
            //         [],
            //         [],
            //         [],
            //         [],
            //         [],
            //     ],
            //     nextId: 9,
            //     baseNote: 4,
            //     id: id2,
            //     muted: false,
            //     soloed: false,
            //     currentNote: [],
            //     volume: -8,
            //     synth: defaultSynth(),
            //     filter: defaultFilter()
            // },
        }
    };
}

export const defaultTrack = (num, id) => ({
    name: `Track ${num}`,
    sequence: [[], [], [], [], [], [], [], []],
    nextId: 0,
    baseNote: 4,
    id,
    muted: false,
    soloed: false,
    currentNote: [],
    volume: 0,
    synth: defaultSynth(),
    filter: defaultFilter()
});


export function mario() {
    return {
        bpm: 100,
        name: 'mario',
        tracks: {
            // 用uuid生成的id
            '4ebd49bd-114c-46ab-a346-805eb554f1ef': {
                // 几分音符？好像是，这里是2对应的却是8分音符的图标
                // baseNote是8的时候对应的却是2分音符的图标
                baseNote: 2,
                // 播放的当前音符，是否处于这个bucket，用来判断当前拍子是否高亮
                // 判断当前音符是否高亮，要看当前拍子是否高亮而且是否到了当前音符
                // currentNote[0]是当前拍子，currentNote[1]是当前音符
                currentNote: [],
                id: '4ebd49bd-114c-46ab-a346-805eb554f1ef',
                muted: false,
                name: 'Coin',
                nextId: 17,
                sequence: [
                    [],
                    [
                        { id: 13, value: 'rest' },
                        { id: 16, value: 'rest' },
                        { id: 11, value: 'rest' },
                        { id: 14, value: 'B5' }
                    ],
                    [{ id: 15, value: 'E6' }],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
                soloed: false,
                volume: -20,
                synth: defaultSynth(),
                filter: defaultFilter()
            },
            'bcfbc2d3-4e04-436a-8767-37353a0c4696': {
                baseNote: 4,
                currentNote: [],
                id: 'bcfbc2d3-4e04-436a-8767-37353a0c4696',
                muted: false,
                name: 'High Melody',
                nextId: 50,
                sequence: [
                    [
                        { id: 9, value: 'C5' },
                        { id: 10, value: 'rest' },
                        { id: 11, value: 'rest' },
                        { id: 12, value: 'G4' }
                    ],
                    [
                        { id: 23, value: 'rest' },
                        { id: 14, value: 'rest' },
                        { id: 13, value: 'E4' },
                        { id: 24, value: 'rest' }
                    ],
                    [
                        { id: 25, value: 'rest' },
                        { id: 27, value: 'A4' },
                        { id: 26, value: 'rest' },
                        { id: 28, value: 'B4' }
                    ],
                    [
                        { id: 29, value: 'rest' },
                        { id: 30, value: 'A#4' },
                        { id: 31, value: 'A4' },
                        { id: 32, value: 'rest' }
                    ],
                    [
                        { id: 33, value: 'G4' },
                        { id: 34, value: 'E5' },
                        { id: 35, value: 'G5' }
                    ],
                    [
                        { id: 36, value: 'A5' },
                        { id: 37, value: 'rest' },
                        { id: 38, value: 'F5' },
                        { id: 39, value: 'G5' }
                    ],
                    [
                        { id: 40, value: 'rest' },
                        { id: 41, value: 'E5' },
                        { id: 15, value: 'rest' },
                        { id: 42, value: 'C5' }
                    ],
                    [
                        { id: 43, value: 'D5' },
                        { id: 44, value: 'B4' },
                        { id: 17, value: 'rest' },
                        { id: 22, value: 'rest' }
                    ]
                ],
                soloed: false,
                volume: 2,
                synth: defaultSynth(),
                filter: defaultFilter()
            },
            'cba856c2-2d3b-4fb5-b31e-0a430c713f90': {
                baseNote: 4,
                currentNote: [],
                id: 'cba856c2-2d3b-4fb5-b31e-0a430c713f90',
                muted: false,
                name: 'Harmony Melody',
                nextId: 42,
                sequence: [
                    [
                        { id: 0, value: 'E4' },
                        { id: 2, value: 'rest' },
                        { id: 1, value: 'rest' },
                        { id: 3, value: 'C4' }
                    ],
                    [
                        { id: 5, value: 'rest' },
                        { id: 4, value: 'rest' },
                        { id: 6, value: 'G3' },
                        { id: 7, value: 'rest' }
                    ],
                    [
                        { id: 8, value: 'rest' },
                        { id: 9, value: 'C4' },
                        { id: 10, value: 'rest' },
                        { id: 11, value: 'D4' }
                    ],
                    [
                        { id: 13, value: 'rest' },
                        { id: 32, value: 'C#4' },
                        { id: 15, value: 'C4' },
                        { id: 12, value: 'rest' }
                    ],
                    [
                        { id: 16, value: 'C4' },
                        { id: 17, value: 'G4' },
                        { id: 18, value: 'B4' }
                    ],
                    [
                        { id: 31, value: 'C5' },
                        { id: 20, value: 'rest' },
                        { id: 21, value: 'A4' },
                        { id: 22, value: 'B4' }
                    ],
                    [
                        { id: 23, value: 'rest' },
                        { id: 24, value: 'A4' },
                        { id: 25, value: 'rest' },
                        { id: 26, value: 'E4' }
                    ],
                    [
                        { id: 27, value: 'F4' },
                        { id: 28, value: 'D4' },
                        { id: 29, value: 'rest' },
                        { id: 30, value: 'rest' }
                    ]
                ],
                soloed: false,
                volume: -6,
                synth: defaultSynth(),
                filter: defaultFilter()
            },
            'cdf1002a-1c03-4f50-915d-7c7b3764d961': {
                baseNote: 8,
                currentNote: [],
                id: 'cdf1002a-1c03-4f50-915d-7c7b3764d961',
                muted: false,
                name: 'Bass',
                nextId: 37,
                sequence: [
                    [{ id: 14, value: 'C3' }, { id: 32, value: 'G2' }],
                    [{ id: 33, value: 'F2' }, { id: 34, value: 'E2' }],
                    [{ id: 22, value: 'E3' }, { id: 23, value: 'F3' }],
                    [{ id: 27, value: 'E3' }, { id: 28, value: 'D3' }]
                ],
                soloed: false,
                volume: 0,
                synth: defaultSynth(),
                filter: defaultFilter()
            }
        },
        // 是否正在播放
        playing: false,
        // 在右侧进行点击试听的
        testNote: {
            on: false,
            value: ''
        }
    }
}
export function Speed_fuTure_() {
    return {
      bpm: 60,
      name: 'Speed-fuTure-',
      // 线上功能的分享
      shared: false,
      // 音轨
      tracks: {
        // 用uuid生成的id
        '4ebd49bd-114c-46ab-a346-805eb554f1ef': {
          // 几分音符？好像是，这里是2对应的却是8分音符的图标
          // baseNote是8的时候对应的却是2分音符的图标
          baseNote: 4,
          currentNote: [],
          id: '4ebd49bd-114c-46ab-a346-805eb554f1ef',
          muted: false,
          name: 'Coin',
          // 这个用来干嘛
          nextId: 17,
          sequence: [
            [
              { id: 9, value: "E4" },
              { id: 9, value: "B4" },
              { id: 9, value: "G4" },
              { id: 9, value: "B4" }
            ],
  
  
            [
              { id: 9, value: "E5" },
              { id: 9, value: "B4" },
              { id: 9, value: "G4" },
              { id: 9, value: "B4" },
            ],
  
            [
              { id: 9, value: "C4" },
              { id: 9, value: "G4" },
              { id: 9, value: "E4" },
              { id: 9, value: "G4" }
            ],
  
  
            [
              { id: 9, value: "C5" },
              { id: 9, value: "G4" },
              { id: 9, value: "E4" },
              { id: 9, value: "G4" }
            ],
  
            [
              { id: 9, value: "D4" },
              { id: 9, value: "A4" },
              { id: 9, value: "F#4" },
              { id: 9, value: "A4" }
            ],
            [
              { id: 9, value: "D5" },
              { id: 9, value: "A4" },
              { id: 9, value: "F#4" },
              { id: 9, value: "A4" }
            ],
  
            [
              { id: 9, value: "B3" },
              { id: 9, value: "F#4" },
              { id: 9, value: "D4" },
              { id: 9, value: "F#4" }
            ],
  
  
            [
              { id: 9, value: "B4" },
              { id: 9, value: "F#4" },
              { id: 9, value: "D4" },
              { id: 9, value: "F#4" }
            ],
          ],
          soloed: false,
          volume: -20,
          synth: defaultSynth(),
          filter: defaultFilter()
        },
        'bcfbc2d3-4e04-436a-8767-37353a0c4696': {
          baseNote: 4,
          currentNote: [],
          id: 'bcfbc2d3-4e04-436a-8767-37353a0c4696',
          muted: false,
          name: 'High Melody',
          nextId: 50,
          sequence: [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
  
            [
              { id: 0, value: "E4" },
              { id: 0, value: "E4" },
              { id: 0, value: "rest" },
              { id: 0, value: "rest" },
            ],
            [],
  
            [
              { id: 9, value: "G3" },
              { id: 9, value: "G3" },
              { id: 9, value: "rest" },
              { id: 9, value: "rest" }
            ],
            [],
  
            [
              { id: 9, value: "A3" },
              { id: 9, value: "A3" },
              { id: 9, value: "rest" },
              { id: 9, value: "rest" }
            ],
            [],
            [
              { id: 9, value: "E3" },
              { id: 9, value: "E3" },
              { id: 9, value: "rest" },
              { id: 9, value: "rest" }
            ],
            [],
          ],
          soloed: false,
          volume: 2,
          synth: defaultSynth(),
          filter: defaultFilter()
        },
        'cba856c2-2d3b-4fb5-b31e-0a430c713f90': {
          baseNote: 4,
          currentNote: [],
          id: 'cba856c2-2d3b-4fb5-b31e-0a430c713f90',
          muted: false,
          name: 'Harmony Melody',
          nextId: 42,
          sequence: [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
  
            [
              { id: 0, value: "B4" },
              { id: 0, value: "B4" },
              { id: 0, value: "rest" },
              { id: 0, value: "rest" },
            ],
            [],
  
            [
              { id: 9, value: "C3" },
              { id: 9, value: "C3" },
              { id: 9, value: "rest" },
              { id: 9, value: "rest" }
            ],
            [],
  
            [
              { id: 9, value: "D3" },
              { id: 9, value: "D3" },
              { id: 9, value: "rest" },
              { id: 9, value: "rest" }
            ],
            [],
            [
              { id: 9, value: "B2" },
              { id: 9, value: "B2" },
              { id: 9, value: "rest" },
              { id: 9, value: "rest" }
            ],
            [],
          ],
          soloed: false,
          volume: -6,
          synth: defaultSynth(),
          filter: defaultFilter()
        },
      },
      // 是否正在播放
      playing: false,
      // 在右侧进行点击试听的
      testNote: {
        on: false,
        value: ''
      }
    };
  }
  