import React, { Component } from 'react'
import Bucket from '../bucket'

import { connect } from 'react-redux'
import {
    deleteBucket
} from '../../redux/actions/actions-project'

import './index.css'

class BucketContainer extends Component {

    deleteBtn = () => {
        // console.log(this.props);
        const { bucketId, trackId } = this.props
        this.props.deleteBucket({
            bucketId,
            trackId
        })
    }

    render() {
        return (
            <div className="bucket-container">
                <Bucket {...this.props} />
                <button
                    onClick={this.deleteBtn}
                    className='delete-bucket button-dark'>
                    ✖
                </button>
            </div>
        )
    }
}

const mapStateToProps = null
const mapDispatchToProps = { deleteBucket }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BucketContainer)
