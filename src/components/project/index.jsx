import React, { Component } from 'react'
import ProjectBtn from '../project-btn'
import Tracks from '../tracks'

//react-redux相关
import { connect } from 'react-redux'
import {
    changeProjectName,
    initProject,
    toSpeed_fuTure_,
    toMario,
} from '../../redux/actions/actions-project'

// react-dnd相关
import { DropTarget } from 'react-dnd'
import ItemTypes from '../../dnd/item-types'

import EditableText from '../editable-text'

// 引入antd
import { Button, } from 'antd';
import {
    EditOutlined,
    SaveOutlined
} from '@ant-design/icons';
// css
import './index.css'


// 把store中的state全部解构传进去，内部props接收就是project的解构形式
const mapStateToProps = (state) => ({ ...state })
// 简写形式
const mapDispatchToProps = {
    changeProjectName,
    initProject,
    toSpeed_fuTure_,
    toMario,
}

const spec = {
    drop(props, monitor, component) {
        // const item = monitor.getItem()
        // console.log('我是item', item);
        // 这里 return 出去的对象属性自行选择，这里只是用 id 作为演示
        return { id: props.id }
    }
}

// collect中的可以传给当前drop组件为props
const collect = (connect, monitor) => {
    const item = monitor.getItem()
    // console.log('我是item', item);
    return {
        connectDropTarget: connect.dropTarget(),
        item,
        monitor
    }
}


class Project extends Component {

    state = {
        value: this.props.name
    }

    // 打印store
    logStore = () => {
        console.log(this.props);
    }

    // 新建空白乐章，就是把redux里的store都改了。相当于初始化
    initProject = () => {
        this.props.initProject()
    }

    // 换成体验曲目2
    changeToSpeed_fuTure_=()=>{
        this.props.toSpeed_fuTure_()
    }
    // 换成体验曲目2
    changeToMario=()=>{
        this.props.toMario()
    }



    render() {
        const { connectDropTarget } = this.props
        // 测试dnd能携带的obj
        // const { monitor } = this.props
        // console.log(monitor.getItem());
        // let item = monitor.getItem()?monitor.getItem():null
        // console.log('project',this.props);
        return connectDropTarget(
            <div
                className='project'//让project撑满左边的css样式
            >
                {/* 测试dnd能携带的obj是什么{item} */}
                {/* {
                    monitor.getItem()?monitor.getItem():null
                } */}
                <div className="project-header">
                    <div className="project-title">

                        <EditableText
                            value={this.props.name}
                            title='编辑项目名称'
                            onBlur={value => { this.props.changeProjectName(value) }}
                        />
                    </div>
                    {/* 这样传递就是全部store传进去了，可以不这样传，练习redux */}
                    {/* <ProjectBtn {...this.props} /> */}

                    <ProjectBtn />


                    {/* <div onClick={this.logStore}>点我打印store</div> */}
                    <button onClick={this.logStore}>点我打印store</button>
                    <br />
                    <Button
                        icon={<SaveOutlined />}
                        size='small'
                        onClick={this.logStore}
                    >保存</Button>
                    <br />
                    {/* <Button
                        icon={<SaveOutlined />}
                        size='small'
                        onClick={this.changeToMario}
                    >体验曲目1 mario</Button>
                    <br /> */}
                    <Button
                        icon={<SaveOutlined />}
                        size='small'
                        onClick={this.changeToSpeed_fuTure_}
                    >体验曲目2 寄生兽bgm</Button>
                    <br />
                    <Button
                        icon={<EditOutlined />}
                        size='small'
                        onClick={this.initProject}
                    >新建空白乐章</Button>
                </div>
                <Tracks />
            </div>
        )
    }
}


const dt_Project = DropTarget(
    ItemTypes.NOTE,
    spec,
    collect
)(Project)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(dt_Project)
