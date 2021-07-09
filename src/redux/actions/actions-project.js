export const UPDATE_TEST_NOTE = 'update_test_note'
export const CHANGE_PROJECT_NAME = 'change_project_name'
export const CHANGE_PROJECT_BPM = 'change_project_bpm'
export const PLAY = 'play'
export const STOP = 'stop'
export const ADD_TRACK = 'add_track'
export const ADD_NOTE = 'add_note'
export const UPDATE_CURRENT_NOTE = 'update_current_note';
export const DELETE_BUCKET = 'delete_bucket';
export const ADD_BUCKET = 'add_bucket';
export const INIT_PROIECT = 'init_project';
export const SPEED_FUTURE = 'speed_future_';
export const MARIO = 'mario';



// payload 加载的action
export const updateTestNote = ({ on, value }) => {
    return {
        type: UPDATE_TEST_NOTE,
        // 加载
        payload: { on, value }
    }
}

// 改名
export const changeProjectName = (name) => {
    return {
        type: CHANGE_PROJECT_NAME,
        name
    }
}

// 改bpm
export const changeProjectBpm = (bpm) => {
    return {
        type: CHANGE_PROJECT_BPM,
        bpm
    }
}

// 播放
export const play = () => {
    return {
        type: PLAY,
    }
}

// 暂停
export const stop = () => {
    return {
        type: STOP,
    }
}

// 添加track
export const addTrack = () => {
    return {
        type: ADD_TRACK,
    }
}

// 在bucket中添加Note，需要bucketId, trackId
export const addNote = ({ value, id = null, index, bucketId, trackId }) => {
    return {
        type: ADD_NOTE,
        payload: { value, id, index, bucketId, trackId }
    }
}

// 更新当前正在播放的note，是一个数组，currentNote[0]是当前拍子，currentNote[1]是当前音符
export function updateCurrentNote({ bucketId, noteIndex, trackId }) {
    return {
        type: UPDATE_CURRENT_NOTE,
        payload: { bucketId, noteIndex, trackId }
    };
}

// 删除一个bucket
export function deleteBucket({ bucketId, trackId }) {
    return {
        type: DELETE_BUCKET,
        payload: { bucketId, trackId }
    }
}

// 添加一个bucket
export function addBucket(trackId) {
    return {
        type: ADD_BUCKET,
        payload: { trackId }
    }
}

// 新建空白乐章
export function initProject(){
    return{
        type:INIT_PROIECT,
    }
}

// 换体验曲目Speed_fuTure_
export function toSpeed_fuTure_(){
    return{
        type:SPEED_FUTURE,
    }
}

// 换体验曲目Speed_fuTure_
export function toMario(){
    return{
        type:MARIO,
    }
}
