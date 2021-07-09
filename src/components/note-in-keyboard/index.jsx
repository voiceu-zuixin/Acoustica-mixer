import React, { Component } from 'react'

// redux相关的
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// dnd相关
import { DragSource, DropTarget } from 'react-dnd'
import ItemTypes from '../../dnd/item-types'

import {
    updateTestNote,
    addNote,
    //  addTrack
} from '../../redux/actions/actions-project'

// css
import './index.css'

// Note音符组件
import Note from '../note'
// import Note from '../note/note'



// 可以把下面的actions传进NoteInKeyboard组件当props
// const mapDispatchToProps = { updateTestNote }
const mapDispatchToProps = (dispatch) => {
    const actions = {
        updateTestNote,
        addNote
    }
    return bindActionCreators(actions, dispatch)
}

const mapStateToProps = (state) => {
    return {
        testNote: state.testNote,
        state1: state
    }
}

// dnd的collect属性，把connectDragSource传进去当props，用这个包裹return才能进行drag
function collect(connect) {
    return {
        connectDragSource: connect.dragSource()
    };
}



// drag source spec function
// 这是drag的spec属性,这个return 的在drop那边的spec里面能得到
const noteInKeyboardSource = {
    beginDrag(props) {
        // 返回的对象可以在 monitor.getItem()中取到，在drop里也可以取到
        return {
            value: props.value,
            source: 'keyboard'
        }
    },

    // 还差其他的函数，比如endDrag
    endDrag(props, monitor) {
        // 因为monitor.didDrop()在endDrag里面是ture，所以不需要进行判断monitor.didDrop()是否已经处理
        // console.log('monitor.didDrop()', monitor.didDrop());
        // console.log('monitor', monitor);

        // console.log('getDropResult', monitor.getDropResult());
        // console.log('getDropResult', monitor);
        // console.log('getDropResult', monitor.getItem());
        // console.log('x', monitor[x]);
        // 只有被其他的解决了才会返回一个对象

        if (monitor.didDrop()) {
            // console.log('getDropResult', monitor.getDropResult());
        }

        // 为什么monitor.getDropResult()得不到想要的值？
        /* 
        drop(){}中monitor.getDropResult()可以得到任意drag到此处来drop的元素
        但是可以通过事件冒泡，外部部件drop到子组件，子组件drop()函数return一个对象，在父组件drop()里可以得到
        
        但是drag中endDrag(){}中getDropResult()只能得到同一组件既是drag又是drop 的里面drop()返回的对象
        所以此处无法得到想要 的数据
        */


        // const { addNote, value } = props
        // const { target } = monitor.getDropResult()
        // console.log('getDropResult', monitor.getDropResult());
        // if (target === 'bucket') {
        //     addNote({
        //         value,
        //     })
        // }
    }
};

class NoteInKeyboard extends Component {
    constructor(props) {
        super(props)
        this.updateTestNote = this.props.updateTestNote
    }


    testNoteOn = () => {
        if (this.props.value !== 'rest') {
            // 为什么redux的devtool没变化，switch也没进入任何一项
            this.updateTestNote({
                on: true,
                value: this.props.value,
            })
            // 确实是运行了，但是我认为是因为异步的关系，下面的输出还是没有变化
            // console.log('---');
        }
        
    }
    testNoteOff = () => {
        if (this.props.value !== 'rest') {
            this.updateTestNote({
                on: false,
                value: this.props.value
            })
        }
    }
    render() {
        const {
            connectDragSource,
            value,
            connectDropTarget,
        } = this.props
        return connectDragSource(
            connectDropTarget(
                <div
                    className={`note-in-keyboard`}
                    onMouseDown={this.testNoteOn}
                    // onClick={this.testNoteOn}
                    onMouseUp={this.testNoteOff}
                    onDragStart={this.testNoteOff}
                >
                    <Note value={value} />
                </div>
            ))
    }
}

const noteInKeyboardTarget = {
    drop(props, monitor) {
        console.log('drop', monitor.getDropResult());
        return {
            keyboard: 2
        }
    },

}
const collectTarget = (connect) => {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

const NoteInKeyboard_DDT = DropTarget(
    ItemTypes.NOTE,
    noteInKeyboardTarget,
    collectTarget
)(NoteInKeyboard)

const NoteInKeyboard_DS = DragSource(
    ItemTypes.NOTE,
    noteInKeyboardSource,
    collect
)(NoteInKeyboard_DDT)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteInKeyboard_DS)