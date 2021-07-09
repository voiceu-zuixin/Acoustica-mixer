// React相关
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  // HashRouter,
  Route,
  Switch
} from 'react-router-dom'

// Redux相关
import { Provider } from 'react-redux'
import store from './redux/store'


//css相关 
import 'normalize.css'//生效了
// 这里引入了antd的css覆盖了之前的css，要注意
import "antd/dist/antd.css";
import './index.css';

// 引入主模块App入口,经过路由导入
import App from './components/app';

// 引入简历模块
import Resume from './components/resume'

// 引入resume-antd
import ResumeAntd from './components/resume-antd'

// 引入Tone，用来Tone.context.resume();
import * as Tone from 'tone'


// 引入Sequencer构造函数
import Sequencer from './sequencer'


// // 创建Sequencer实例，并传入store，保证播放系统有所响应
new Sequencer(store)
// 确保Tone的AudioContext模块在一开始能够运行而不被禁止  https://github.com/Tonejs/Tone.js/issues/341
document.documentElement.addEventListener('mousedown', () => {
  if (Tone.context.state !== 'running')
    Tone.context.resume();
});
// console.log(process.env.NODE_ENV);

ReactDOM.render((
  // 传入store
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={ResumeAntd} />
        <Route exact path='/resume' component={Resume} />
        <Route path='/voiceu' component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));
