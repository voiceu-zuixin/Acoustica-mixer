import * as Tone from 'tone'
import {
    selectTestNote,
    selectTracks,
    selectPlaying,
    selectProjectIdAndTrackCount,
    selectBpm,
} from '../redux/selectors'
import Track from './track'

import observeStore from '../redux/observers'

// 一个音序器的构造函数，会传一个store的参数，通过改变redux的store
// 进行监听store 的变化，做出相应的播放等操作
export default class Sequencer {
    // 接收redux 的store作为参数,
    // 因为这不是react的类，并不是extends Component，所以需要自己用构造器来定义传进来的参数
    constructor(store) {
        // 把store存进来
        this.store = store
        this.tracks = [];
        
        // 新建一个合成器，播放的时候需要这个
        this.synth = new Tone.Synth().toMaster()
        // this.synth = new Tone.Synth().toDestination()


        // 在这里把selectBPM添加进来就可以了
        Tone.Transport.bpm.value = store.getState().bpm
        // console.log('bpm',Tone.Transport.bpm.value);


        // 新建一个监听器，一旦store发生改变就做出响应,监听器函数需要自己定义
        // 在外部可以通过subscriptions[i]()来取消监听
        this.subscriptions = [
            observeStore(store, selectTestNote, this.handleTestNoteChange.bind(this)),
            observeStore(store, selectPlaying, this.handlePlayingChange.bind(this)),
            observeStore(store, selectBpm, this.handleBpmChange),
            observeStore(
                store,
                selectProjectIdAndTrackCount,
                this.handleProjectIdOrTrackCountChange.bind(this)
            )

            // 为什么要用bind，是因为这是在constructor里面定义的，所以没有this
            // 就像在里面定义state要加this一样，在外部的话就不需要加bind了
            // observerStore(store, selectTestNote, this.handleTestNoteChange)
        ]
        // this.generateTracks()
    }

    // 给我整不会了
    // constructor(store){
    //     console.log(store);
    //     this.store = store
    // }
    // static synth = new Tone.Synth().toDestination()
    // static subscriptions = [
    //     observerStore(this.store, selectTestNote, this.handleTestNoteChange)
    // ]

    handlePlayingChange(playing) {
        playing
            ? Tone.Transport.start('+0.1')//延迟0.1s播放
            : Tone.Transport.stop();
    }

    handleBpmChange = (bpm) => {
        Tone.Transport.bpm.value = bpm;
    }

    handleTestNoteChange = ({ on, value }) => {
        on
            ? this.synth.triggerAttack(value)
            : this.synth.triggerRelease()
    }

    // 会自动调用，因为在observe监听器里面调用了
    handleProjectIdOrTrackCountChange() {
        console.log('gaibianle');
        // 删除这些实例
        this.tracks.forEach(track => { track.deleteSelf(); });
        // 如果我删除后就关闭那个监听器不就行了？
        // 但是deleteSelf在内部已经做了删除操作

        this.tracks = this.generateTracks();
    }

    // 生成tracks的音轨
    generateTracks() {
        // console.log('MMM');
        return Object.values(selectTracks(this.store.getState()))
            // 解构出id
            .map(({ id }) => {
                // console.log('id', id);
                return new Track(this.store, id);
            });
    }

}