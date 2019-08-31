//返回的都是promise

//注册接口
import ajax from './ajax'

export const reqRegister = (user) => ajax('/register', user, 'POST')

//登录接口
export const reqLogin = ({ username, password }) => ajax('/login', { username, password }, 'POST')

//更新接口
export const reqUpdateUser = (user) => ajax('/update', user, 'POST')