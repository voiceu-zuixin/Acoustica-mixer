export function selectTestNote(state) {
    return state.testNote
}
export function selectBpm(state) {
    return state.bpm
}
export function selectPlaying(state) {
    return state.playing
}
export function selectTracks(state) {
    return state.tracks
}
export function selectTrack(id) {
    return state => state.tracks[id]
}
export function selectNextId(trackId) {
    return state => state.tracks[trackId].nextId
}
export function selectSequence(id){
    return state => state.tracks[id].sequence
}

// 复制的
export function selectProjectIdAndTrackCount(state) {
    return `${state.id},${Object.keys(state.tracks).length}`;
}
