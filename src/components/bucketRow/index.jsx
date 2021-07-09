import React, { Component } from 'react'
import BucketContainer from '../bucketContainer'
import { connect } from 'react-redux'

import {
    addBucket
} from '../../redux/actions/actions-project'
import './index.css'

class BucketRow extends Component {


    handleAddBucketClick = () => {
        const {id,addBucket} = this.props
        addBucket(id)
    }
    render() {
        const { sequence, currentNote, id } = this.props
        //#region 
        /* sequence中的bucket其实就是各个音块的数组
        比如：
        sequence:[
            [
                {id: 13,value: 'rest'},
                {id: 16,value: 'rest'},
                {id: 11,value: 'rest'},
                {id: 14,value: 'B5'}
            ],
            [ { id: 15, value: 'E6' } ],
            [],
            [],
            ]

        所以notes:[
                {id: 13,value: 'rest'},
                {id: 16,value: 'rest'},
                {id: 11,value: 'rest'},
                {id: 14,value: 'B5'}
            ]
        应该是一个数组，可以当做各个note组成notes
        */
        //#endregion
        const Buckets = sequence.map((bucket, i) => {
            return (
                <BucketContainer
                    notes={bucket}
                    currentNote={currentNote}
                    key={i}
                    bucketId={i}
                    trackId={id}
                />
            )
        })
        return (
            <div className='bucketrow'>
                {Buckets}

                <button
                    onClick={this.handleAddBucketClick}
                    className="button-light bucketrow-button"
                    title="add bucket"
                >
                    +
      </button>
            </div>
        )
    }
}
const mapDispatchToProps = {addBucket}
export default connect(
    null,
    mapDispatchToProps
)(BucketRow)
