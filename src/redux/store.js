import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers/reducer-project'
import thunk from 'redux-thunk'

// 异步处理的thunk还未install，占时不必引入

// console.log(process.env.NODE_ENV);
// console.log(__REDUX_DEVTOOLS_EXTENSION__);


// 如果是在开发环境下，会用上devtools，如果是在生产环境就不用
let store = process.env.NODE_ENV === 'development' ? (
    createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()))
) : createStore(reducers)

export default store