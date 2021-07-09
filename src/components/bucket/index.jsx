import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectNextId } from '../../redux/selectors'

import ItemTypes from '../../dnd/item-types'
import { DropTarget } from 'react-dnd'
import {
    addNote,
} from '../../redux/actions/actions-project'

import NoteInBucket from '../note-in-bucket'

import './index.css'

const mapStateToProps = (state, ownProps) => {
    return { nextId: selectNextId(ownProps.trackId)(state) }
}
const mapDispatchToProps = { addNote }


class Bucket extends Component {
    render() {

        // console.log('bucket',this.props);
        // 添加note后这里的props没有更新，这里不是上面传下来的吗
        // 难道是浅拷贝的关系，对象里有对象
        const {
            notes,
            currentNote,
            bucketId,
            trackId,
            nextId,
            connectDropTarget
        } = this.props

        // 播放的当前音符，是否处于这个bucket，用来判断当前拍子是否高亮
        let styleName = currentNote[0] === bucketId
            ? 'bucket bucket-playing'
            : 'bucket'

        const Notes = notes.map((note, i) => {
            // 判断当前音符是否高亮，要看当前拍子是否高亮而且是否到了当前音符
            let active = currentNote[0] === bucketId && currentNote[1] === i;
            return (
                <NoteInBucket
                    value={note.value}
                    active={active}
                    index={i}
                    key={i}
                    id={note.id}
                    bucketId={bucketId}
                    nextId={nextId}
                    trackId={trackId}
                />
            )
        })
        return connectDropTarget(
            <div className={styleName}>
                {Notes}
            </div>
        )
    }
}

const bucketTarget = {
    // 返回的对象可以在monitor.getDropResult()中取到
    drop(props, monitor) {//这个props是从父组件传进来的的
        /* 	
        如果某个drop target处理了drop 事件。则返回true，否则返回false。
        即使 target 没有返回 drop 结果，didDrop() 也会返回true。 
        在 endDrag() 中使用它来测试任何放置目标是否已处理掉落。
        如果在 endDrag() 之外调用，则返回 false 
        */
        // monitor.didDrop()如果这个存在，即有其他target处理了这个事件

        // 因为bucket和note-in-bucket在一起，所以要先取消一个
        // console.log('bucket', monitor.getDropResult());

        if (monitor.didDrop())
            return
        console.log('bucketgetItem', monitor.getItem());
        const item = monitor.getItem()
        const { value } = item
        const { bucketId, trackId, nextId, length } = props
        if (item.source === 'keyboard')
            props.addNote({
                value,
                bucketId,
                trackId,
                id: nextId,
                index: length
            })
        // 返回一个对象，在noteInKeyboard里面drop的时候，进行判断是否addNote

        // return {
        //     target: 'bucket',
        //     bucketId: props.bucketId,
        //     trackId: props.trackId,
        //     nextId: props.nextId,
        //     length: props.notes.length
        // }
    }
}


const collect = (connect) => {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

// 放入drop环境中
const dt_Bucket = DropTarget(
    ItemTypes.NOTE,
    bucketTarget,
    collect
)(Bucket)

// 放入redux环境中
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(dt_Bucket)