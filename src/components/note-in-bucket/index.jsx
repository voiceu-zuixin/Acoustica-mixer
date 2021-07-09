import React, { Component } from 'react'

// react-redux
import { connect } from 'react-redux'

import {
    selectBpm,
    selectPlaying,
} from '../../redux/selectors'
import {
    addNote,
    play,
    stop
} from '../../redux/actions/actions-project'

// react-dnd
import {
    // DragSource, 
    DropTarget
} from 'react-dnd'
import ItemTypes from '../../dnd/item-types'

import Note from '../note'
import './index.css'

// 验证浅拷贝只能对playing这种属性生效，改变了tracks对象这种，要用深拷贝
const mapStateToProps = (state) => {
    return {
        bpm: selectBpm(state),
        playing: selectPlaying(state)
    }
}
const mapDispatchToProps = {
    addNote,
    play,
    stop
}

const targetCollect = (connect) => {
    return { connectDropTarget: connect.dropTarget() }
}

// drop的spec配置
const noteInBucketTarget = {
    hover(props, monitor, component) {

    },


    drop(props, monitor) {
        // const {
        //     noteIndex:
        // }
        const item = monitor.getItem()
        // console.log('noteinbucket', item);
        if (item.source === 'keyboard') {
            props.addNote({
                value: item.value,
                id: props.nextId,
                index: props.index,
                bucketId: props.bucketId,
                trackId: props.trackId
            })

            // 改变monitor.getItem()的值,可以防抖，只添加一次
            monitor.getItem().value = item.value;
            // 为什么会只添加一次，因为下面的source改成了null
            monitor.getItem().source = null;
            monitor.getItem().noteIndex = props.index;
            monitor.getItem().bucketId = props.bucketId;
            monitor.getItem().id = props.nextId;
            monitor.getItem().trackId = props.trackId;
            // return;
        }

        // console.log('note-in-bucket', monitor.getDropResult());

        return {
            note_in_bucket: 1
        }
    },
}


class NoteInBucket extends Component {

    handlePlayStopClick = () => {
        // 当点击的时候，playing是true说明正在播放，那么点击就应该stop
        this.props.playing
            ? this.props.stop()
            : this.props.play()
    }

    render() {
        // console.log('NoteInBucket', this.props);
        const {
            value,
            active,
            // 先暂时不做drag 的功能
            // connectDragSource,
            connectDropTarget,
            isDragging,
        } = this.props

        const opacity = isDragging ? 0 : 1;

        return connectDropTarget(
            <div className="note-in-bucket" style={{ opacity }}>
                <Note value={value} active={active} />
                {/* <button onClick={this.handlePlayStopClick}></button> */}
            </div>
        )
    }
}

// 先做drop的功能
const NoteInBucket_DT = DropTarget(
    ItemTypes.NOTE,
    noteInBucketTarget,
    targetCollect
)(NoteInBucket)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteInBucket_DT)