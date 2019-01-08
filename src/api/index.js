//包含了n个接口请求的函数模块
import ajax from 'ajax'

export const reqRegister = (user) => ajax('/register', user, 'POST')
export const reqLogin = ({username, password}) => ajax('/login', {username, password}, 'POST')
export const reqUpdateUser = (user) => {'/update', user, 'POST'}