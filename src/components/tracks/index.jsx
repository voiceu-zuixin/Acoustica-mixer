import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTrack } from '../../redux/actions/actions-project'

import { selectTracks } from '../../redux/selectors'
import Track from '../track'
import './index.css'


const mapStateToProps = (state) => {
    return {
        tracks: selectTracks(state)
    }
}

const mapDispatchToProps = { addTrack }


class Tracks extends Component {
    render() {

        // 把每条track显示出来
        const TrackMsg = Object.values(this.props.tracks).map(track => {
            // 判断sequence有没有值，如果是后续连续删除bucket，删完后应该不加载该条sequence
            // 或者在deleteBucket的reducer里面进行判断
            if(track.sequence.length!==0){
                // 只有当sequence的length不为0 的时候才进行渲染
                // 给每个组价传入id
                return (
                    <Track id={track.id} key={track.id} />
                )
            }
            // 否则就返回一个空的div，而且要传入id，key等
            return <div id={track.id} key={track.id}></div>
        })

        return (
            <div className='tracks'>
                {TrackMsg}
                <button
                    onClick={this.props.addTrack}
                    className="button-dark tracks-new"
                    title="create new track"
                >+</button>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tracks)