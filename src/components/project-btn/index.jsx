import React, { Component } from 'react'

import { connect } from 'react-redux'
import {
    selectBpm,
    selectPlaying,
} from '../../redux/selectors'
// redux的action
import {
    changeProjectBpm,
    play,
    stop
} from '../../redux/actions/actions-project'
import './index.css'

// 两种情况，store传进来的bpm和父组件传进来的bpm谁覆盖谁，
// 父组件的bpm也是store传给父组件的，当bpm改变的时候，传到子组件的bpm会改变吗

const mapStateToProps = (state) => {
    return {
        bpm: selectBpm(state),
        playing: selectPlaying(state)
    }
}
const mapDispatchToProps = {
    changeProjectBpm,
    play,
    stop
}


// 这个组件可以控制bpm和暂停播放
class ProjectBtn extends Component {

    changeProjectBpm = (e) => {
        // console.log(e);
        // e.target.value是字符串形式
        this.props.changeProjectBpm(e.target.value * 1)
    }

    handlePlayStopClick = () => {
        // 当点击的时候，playing是true说明正在播放，那么点击就应该stop
        this.props.playing
            ? this.props.stop()
            : this.props.play()
    }

    renderPlaying = () => {
        // 如果没有播放就显示播放，等待点击播放
        const className = this.props.playing ? 'stop' : 'play'
        return (
            <button
                className="playstop-button button-dark"
                onClick={this.handlePlayStopClick}
            >
                <div className={className}></div>
            </button >
        )
    }


    render() {
        // console.log(this.props);
        return (
            <div className="play-bpm">
                {/* <button onClick={this.changeProjectBpm}>改变bpm</button> */}

                {this.renderPlaying()}
                <input
                    type="number"
                    className="button-dark bpm-input"
                    min='20'
                    max='400'
                    onChange={(e) => this.changeProjectBpm(e)}
                    value={this.props.bpm}
                />
                <label htmlFor="bpm" className="bpm-label">bpm</label>

            </div>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectBtn)
