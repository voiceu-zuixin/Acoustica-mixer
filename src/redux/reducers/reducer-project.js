import {
    UPDATE_TEST_NOTE,
    CHANGE_PROJECT_NAME,
    CHANGE_PROJECT_BPM,
    STOP,
    PLAY,
    ADD_TRACK,
    ADD_NOTE,
    UPDATE_CURRENT_NOTE,
    DELETE_BUCKET,
    ADD_BUCKET,
    INIT_PROIECT,
    SPEED_FUTURE,
    MARIO,

} from '../actions/actions-project'
import { mario, defaultTrack, starterData, Speed_fuTure_ } from '../default-data'
import { v4 as uuidv4 } from 'uuid'


// eslint-disable-next-line
export default (state = mario(), action) => {
    // newState作为一个闭包的变量进行增删改查
    let newState
    // 能不能在这里进行newState = { ...state }，每一次处理action
    // 都会走一遍这个函数，下面试验一下
    //这个是浅拷贝，只能复制对象里的非对象普通数据
    // 但是里面的tracks是对象，还是指向的原来的tracks，里面的sequence就更没变了

    newState = { ...state }

    // 以下是测试用的深拷贝,经过测试结果，得到就是因为这个原因，导致无法正常添加
    // newState = JSON.parse(JSON.stringify(state))


    switch (action.type) {
        case UPDATE_TEST_NOTE:
            // console.log('state', state);
            // newState = { ...state }
            // note写成了node
            newState.testNote = action.payload
            // console.log('newState', newState);
            return newState
        case CHANGE_PROJECT_NAME:
            // newState = { ...state }
            newState.name = action.name
            return newState
        case CHANGE_PROJECT_BPM:
            newState.bpm = action.bpm
            return newState
        case STOP:
            newState.playing = false
            return newState
        case PLAY:
            newState.playing = true
            return newState

        case ADD_TRACK://不要用深拷贝
            // 不用用深拷贝，这个添加一个新的track，不能改变之前的，因为一旦改变之前的，会进行part.removeAll()，
            // 但是又全部换成了新的，就会出错
            // newState = JSON.parse(JSON.stringify(state))

            const newTracks = { ...newState.tracks }
            const trackKeys = Object.keys(newTracks)
            const id = uuidv4()
            newTracks[id] = defaultTrack(trackKeys.length + 1, id)
            // 把新tracks给新state
            newState.tracks = newTracks
            return newState
        case ADD_NOTE://要用深拷贝
            newState = JSON.parse(JSON.stringify(state))

            let { value, index, bucketId, trackId } = action.payload
            const noteObj = { id: action.payload.id, value }

            // 给指定bucket中添加note音符
            newState.tracks[trackId].sequence[bucketId].splice(index, 0, noteObj)

            return newState

        case DELETE_BUCKET:
            // 删除的bucket处于sequence之下，所以差不多是最深层了，要用深拷贝
            newState = JSON.parse(JSON.stringify(state))

            // 不能这样写，因为有可能删除的时候在上面的let还没有经过，bucketId还未声明
            // bucketId = action.payload.bucketId
            // trackId = action.payload.trackId


            // 删除指定的bucket,变量只能挨着.下去
            newState.tracks[action.payload.trackId].sequence.splice(action.payload.bucketId, 1)

            // 判断当前sequence里面还有没有bucket
            // if(newState.tracks[action.payload.trackId].sequence.length===0){
            //     // 如果已经没有了，就删除这个track

            //     // 但是这样写，又会想之前那样出现 Cannot read property 'removeAll' of null的错误，因为深拷贝了
            //     // 所以要删除这个track又不能改变其他的track，要么就是保留这个track，只是不渲染
            //     // 要么就是只删除这个track，不引起其他track 的sequence变化，但是track一删除就会
            //     delete newState.tracks[action.payload.trackId]
            // }

            return newState
        case ADD_BUCKET:
            // 添加同样需要深拷贝
            newState = JSON.parse(JSON.stringify(state))

            // 在指定track的sequence末尾添加一个空白数组
            newState.tracks[action.payload.trackId].sequence.push([])

            return newState





        case UPDATE_CURRENT_NOTE://不用深拷贝，但是却要拷贝到深一层，不能改变sequence

            const { noteIndex } = action.payload
            const trackId_update = action.payload.trackId
            // 所以要一层一层传入并返回，相当于是每一层都进行浅拷贝

            // 第一层
            const newStateTracks = { ...newState.tracks }
            newState.tracks = newStateTracks

            // 第二层,把tracks[id]浅拷贝一个，里面的sequence就不拷贝了
            newStateTracks[trackId_update] = { ...newStateTracks[trackId_update] }
            // newState.tracks[trackId_update].currentNote = [action.payload.bucketId, noteIndex]

            newStateTracks[trackId_update].currentNote = [action.payload.bucketId, noteIndex]
            return newState

        case INIT_PROIECT:
            // 当只有一个音轨的时候，就改掉那一个，如果有两个及以上，就新建
            if (Object.keys(state.tracks).length !== 1) {
                // console.log(Object.keys(state.tracks).length);
                newState = { ...starterData() }
                // const [id1] = Object.keys(newState.tracks);
                // delete newState.tracks[id2];
                // newState.tracks[id1].sequence = [[], [], [], [], [], [], [], []];
                return newState;
            }

            /* 
                这种思路太乱了，而且写在这里的变量容易污染环境，最好是在一个函数里面写
            */
            //#region 
            // const [id1] = Object.keys(newState.tracks);
            // const newStateTracks2 = { ...newState.tracks }
            // newState.tracks = newStateTracks2
            // const newStateTracksTrack = { ...newStateTracks2[id1] }
            // newStateTracks2[id1] = newStateTracksTrack
            // let newSequence = { ...newStateTracksTrack.sequence }
            // newStateTracksTrack.sequence = newSequence
            // newSequence = [
            //     [],
            //     [],
            //     [],
            //     [],
            //     [],
            //     [],
            //     [],
            //     [],
            // ]
            //#endregion

            // 第二次以及后面的新建,并且还是只有一个音轨，就直接改那个音轨为空白就行
            createNewProject()
            return newState;

        case SPEED_FUTURE:
            newState = { ...Speed_fuTure_() }
            return newState;
        case MARIO:
            newState = { ...mario() }
            return newState;

        default:

            return state
    }
    function createNewProject() {
        newState.playing = false
        newState.tracks = { ...newState.tracks }
        const id = Object.keys(newState.tracks)[0]
        newState.tracks[id] = { ...newState.tracks[id] }
        newState.tracks[id].sequence = [[], [], [], [], [], [], [], [],]
    }
}
