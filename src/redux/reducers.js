/* 
包含多个用于生成新的state的reducer
函数的模块
包含n个根据老的state和action返回新的state
的函数的模块
*/
import { combineReducers } from 'redux'
import {
  RECEIVE_USER,
  RESET_USER,
  AUTH_SUCCESS,
  ERROR_MSG
} from './action-types'

import { getRedirectPath } from '../utils'


const initUser = {
  username: '',
  type: '',
  msg: '',//错误提示信息
  redirectTo: '' //需 要 自 动 跳 转 的 路 由 path
}

function user(state = initUser, action) {//初始值
  switch (action.type) {
  case AUTH_SUCCESS://登录或者认证成功
    const redirectTo = getRedirectPath(action.data.type, action.data.header)
    return { ...action.data, redirectTo }
  case ERROR_MSG:
    return { ...state, msg: action.data }//复制state,msg赋新值
  case RECEIVE_USER: //接收用户
    return action.data
  case RESET_USER: //重置用户
    return { ...initUser, msg: action.data }
  default:
    return state
  }
}

//返回合并的 reducer
export default combineReducers({
  user
})