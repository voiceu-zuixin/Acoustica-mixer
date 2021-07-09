// combineReducers的原因，所以是state.project，此为高阶函数
export function selectTrack(id) {
    //   返回一个函数
    return state => state.project.tracks[id];
}

// 静音，mute:bool
export function selectMuted(id) {
    return state => state.project.tracks[id].muted;
}

// 音序器
export function selectSequence(id) {
    return state => state.project.tracks[id].sequence;
}

// 根音
export function selectBaseNote(id) {
    return state => state.project.tracks[id].baseNote;
}

// NextId是干什么的
export function selectNextId(id) {
    return state => state.project.tracks[id].nextId;
}

// 音量大小
export function selectTrackVolume(id) {
    return state => state.project.tracks[id].volume;
}

// 封装器，输出一个可以连接到AudioParam或Tone.signal的信号
export function selectEnvelope(id) {
    return state => state.project.tracks[id].synth.envelope;
}

// 振荡器，每一个合成器里面的一个效果
export function selectOscillator(id) {
    return state => state.project.tracks[id].synth.oscillator;
}

// 振荡器的类型
export function selectOscType(id) {
    return state => state.project.tracks[id].synth.oscillator.type;
}

// 振荡器的去谐率
export function selectOscDetune(id) {
    return state => state.project.tracks[id].synth.oscillator.detune;
}

// 滤波器
export function selectFilter(id) {
    return state => state.project.tracks[id].filter;
}

// 滤波器的频率
export function selectFilterFrequency(id) {
    return state => state.project.tracks[id].filter.frequency;
}

// 滤波器类型
export function selectFilterType(id) {
    return state => state.project.tracks[id].filter.type;
}

// 滤波器的共振率
export function selectFilterResonance(id) {
    return state => state.project.tracks[id].filter.resonance;
}

// 以上的是高阶函数，下面的是普通函数
export function selectTracks(state) {
    return state.project.tracks
}

// 是否播放
export function selectPlaying(state) {
    return state.project.playing;
}

// 节奏
export function selectBPM(state) {
    return state.project.bpm;
}

// 八度音
export function selectOctave(state) {
    return state.project.octave;
}

// 整个project
export function selectProject(state) {
    return state.project;
}

// projectname
export function selectProjectName(state) {
    return state.project.name;
}

// 测试的音符，右侧点击的时候试听
export function selectTestNote(state) {
    return state.project.testNote;
}


export function selectProjectIdAndTrackCount(state) {
    return `${state.project.id},${Object.keys(state.project.tracks).length}`;
}
