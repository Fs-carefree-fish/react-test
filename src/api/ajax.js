import axios from "axios";
export default function ajax(url='', data = {}, type = 'GET') {
  if (type === 'GET') {
    //拼接参数
    let paramStr = ''
    //Object.keys(data)得到对象所有key的数组
    Object.keys(data).forEach(key => {
      paramStr += key + '=' + data[key] + '&'
    })
    if (paramStr) {
      paramStr = paramStr.substring(0, paramStr.length - 1)
    }
    //发请求
    return axios.get(url + '?' + paramStr)
  } else {
    //发请求
    return axios.post(url, data)
  }
}