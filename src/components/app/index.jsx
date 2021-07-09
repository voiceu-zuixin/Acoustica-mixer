import React, { Component } from 'react'

//引入组件 
import Header from '../header'
import Footer from '../footer'
import NoteColumn from '../note-column'
import Project from '../project'

// 引入redux相关
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
// 引入action


// 引入dnd拖拽模块相关的,好像已经不是这样用的了
// import {DragDropContext} from 'react-dnd'
// import HTML5Backend from 'react-dnd-html5-backend'

// 确实不像上面那样引入了
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

// 引入css样式
import './index.css'


// 不用考虑登录功能，所以直接就是渲染ui页面
 class App extends Component {
    render() {
        return (
            <div className='app'>
                <Header/>
                <div className='wrapper'>
                <NoteColumn/>
                <Project/>
                </div>
                <Footer/>
            </div>
        )
    }
}

// 给App封装拖拽环境
class ddc_App extends Component{
    render(){
        return(
            <DndProvider backend={HTML5Backend}>
                <App/>
            </DndProvider>
        )
    }
}

// 给封装好拖拽环境的DndApp连接redux然后导出到入口index.js文件
export default connect(
    null,
    null
)(ddc_App)