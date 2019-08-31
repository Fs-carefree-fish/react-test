/* 
redux最核心的store对象模块
*/
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' 
import {composeWithDevTools} from 'redux-devtools-extension' 
import reducers from './reducers'//把对象传进来

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))