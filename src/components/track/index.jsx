import React, { Component } from 'react'
import BucketRow from '../bucketRow'
import { connect } from 'react-redux'
import { selectTrack } from '../../redux/selectors'


//把这个track传入
const mapStateToProps = (state, ownProps) => {
    return selectTrack(ownProps.id)(state)
}

class Track extends Component {
    render() {
        const { currentNote, sequence, id } = this.props
        return (
            <div>
                <BucketRow
                    // 音序器
                    sequence={sequence}
                    currentNote={currentNote}
                    id={id}
                />
            </div>
        )
    }
}
export default connect(
    // null,
    mapStateToProps,
    null
)(Track)