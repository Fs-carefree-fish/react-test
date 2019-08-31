/**
 * 包含所有 action creator函数的模块
 * 异步action 返回的是一个对象
 * 同步action 返回的是一个函数
 */
import {
  RECEIVE_USER,
  RESET_USER,
  AUTH_SUCCESS,
  ERROR_MSG
} from './action-types'

import {
  reqRegister,
  reqLogin,
  reqUpdateUser
} from '../api'

//授权成功同步action
const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user })
//错误提示信息同步action
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg })

export const register = ({ username, password, password2, type }) => {

  //表单前台验证
  if (!username || !password || !type) {
    return errorMsg('信息不能为空')
  }
  if (password !== password2) {
    return errorMsg('两次密码要一致')
  }

  return async dispatch => { //分发
    const res = await reqRegister({ username, password, type }) // promise.then
    const result = await res.data//{code: 0/1, data:user, msg: ''}
    if (result.code === 0) {//成功
      //分发成功action
      dispatch(authSuccess(result.data))
    } else {//失败
      //分发失败action
      dispatch(errorMsg(result.msg))
    }
  }
}

export const login = ({ username, password }) => {
  //表单前台验证
  if (!username || !password) {
    return errorMsg('信息不能为空')
  }
  return async dispatch => {
    const res = await reqLogin({ username, password })
    const result = await res.data
    if (result.code === 0) {//成功
      //分发成功action
      dispatch(authSuccess(result.data))
    } else {//失败
      //分发失败action
      dispatch(errorMsg(result.msg))
    }
  }
}


//同步接收用户 action
const receiveUser = (user) => ({ type: RECEIVE_USER, data: user })

//同步重置用户
export const resetUser = (msg) => ({ type: RESET_USER, data: msg })

/* 异 步 更 新 用 户 */
export const updateUser = (user) => {
  return async dispatch => {
    const res = await reqUpdateUser(user)
    const result = res.data
    if (result.code === 0) {//成功
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }

}