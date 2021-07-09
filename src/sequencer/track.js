import * as Tone from 'tone'
import {
    selectSequence,
    selectTrack,

} from '../redux/selectors'
import { createPartEvents } from './utils';
import { updateCurrentNote } from '../redux/actions/actions-project';
import observeStore from '../redux/observers'
// import observerStore from '../redux/observers'

export default class Track {
    constructor(store, id) {
        this.store = store
        this.id = id
        console.log(id);
        const { sequence, baseNote, synth } = selectTrack(id)(store.getState())

        this.sequence = sequence;

        this.baseNote = baseNote;

        this.filter = new Tone.Filter(20000, 'lowpass', -96).toMaster();
        // this.filter = new Tone.Filter(20000, 'lowpass', -96).toMaster();
        // this.filter = new Tone.Filter(20000, 'lowpass', -96).toDestination();

        this.synth = new Tone.Synth({
            envelope: synth.envelope,
            oscillator: synth.oscillator
        }).connect(this.filter);

        this.part = this.initPart(sequence, baseNote);

        // console.log('volume',this.synth.volume.value );
        // 初始音量为0，但是太大了。在这里先改一下，0并不是静音
        this.synth.volume.value = -8
        // console.log('volume',this.synth.volume.value );

        // 给sequence添加监听器，一旦新加入note或者删除之类的操作，就重新加载sequence
        this.subscriptions = [
            // 这个监听器写了过后会导致部分不能播放，查一下bug，查出来了因为在reducer里面是所有都深拷贝，
            // 所以只要是有action的都会改变sequence，比如在下面partProcessor里面的updateCurrentNote就会改变
            // 解决办法是在reducer里面按情况进行深浅拷贝，分类，不要每次都深拷贝
            observeStore(store,
                selectSequence(id),
                this.onSequenceChange),
        ]


        // console.log('part',this.part.removeAll);
        // console.log('part',this.part);

    }

    initPart(sequence, baseNote) {
        const part = new Tone.Part(
            this.partProcessor.bind(this),
            createPartEvents(sequence, baseNote)
        );

        // 0表示立刻开始start该part
        part.start(0);
        // 设定为true就会一直重复，立刻执行，如果设定为大于1的数值，就会执行n次
        part.loop = true;
        // loopEnd的节点取决于设定为true的时候
        part.loopEnd = `${sequence.length}*0:${(baseNote / 4)}`;

        return part;
    }
    // initPart = (sequence, baseNote) => {
    //     const part = new Tone.Part(
    //         this.partProcessor.bind(this),
    //         createPartEvents(sequence, baseNote)
    //     );
    //     // const part = new Tone.Part(((time, value) => {
    //     //     // the value is an object which contains both the note and the velocity
    //     //     console.log(time,value);
    //     //     console.log(`${sequence.length}*0:${(baseNote / 4)}`);
    //     //     this.synth.triggerAttackRelease(value.note, "8n", time, value.velocity);
    //     // }), [{ time: 0, note: "C3", velocity: 0.9 },
    //     // { time: "0:2", note: "C4", velocity: 0.5 }
    //     // ]);

    //     // 0表示立刻开始start该part
    //     part.start(0);
    //     // 设定为true就会一直重复，立刻执行，如果设定为大于1的数值，就会执行n次
    //     part.loop = true;
    //     // loopEnd的节点取决于设定为true的时候
    //     part.loopEnd = `${sequence.length}*0:${(baseNote / 4)}`;

    //     return part;
    // }
    /* 
    const part = new Tone.Part( ( (time,note) => { } ), [] )
    
    */
    // 如何保证value传进来的是有值的,要改这个函数，还有utils里面的数组
    partProcessor(time, { value, dur, bucketIndex, noteIndex }) {
        // only trigger a note if it's not a rest, but dispatch currentNote in either case
        // 只要不是rest都会走后面这条triggerAttackRelease，相对于是个if判断了
        // console.log('part', time + '  ' + value + '  ' + dur);
        value !== 'rest' && this.synth.triggerAttackRelease(value, dur, time);//这些参数从Part的后一个参数里面返回来

        // 更改CurrentNote，当前的音符，是用来显示播放的note不同样式，在bucket组件里面
        // 并且，在播放完上一次的note后要跳到下一次的note，然后
        // 不要让这个action 的reducer去深拷贝，改变了sequence，
        // 但是不深拷贝，进入不到那一层，sequence在更深一层，必须要拷贝到目标层位
        this.store.dispatch(
            updateCurrentNote({ bucketId: bucketIndex, noteIndex, trackId: this.id })
        );
    }

    deleteSelf() {
        console.log('deleteSelf');
        // 解除监听
        // unsubscribe from all subscriptions
        this.subscriptions.forEach(unsubscribe => unsubscribe());

        console.log('deleteSelf12313');
        // 处理合成器
        // dispose of the synth
        this.synth.dispose();
        this.synth = null;

        // dispose of the part
        this.part.dispose();
        this.part = null;
    }

    // sequence发生改变就执行
    onSequenceChange = (sequence) => {
        // console.log('sequencechange');
        console.log('part', this.part);
        this.part.removeAll()
        this.part = this.initPart(sequence, this.baseNote)
        this.sequence = sequence
    }
}