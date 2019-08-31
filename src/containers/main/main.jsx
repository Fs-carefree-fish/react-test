import React from "react"
import { Component } from "react"
import {Switch, Route} from 'react-router-dom' 
// import Cookies from 'js-cookies'


import LaobanInfo from '../laoban-info/laoban-info' 
import DashenInfo from '../dashen-info/dashen-info'


export default class Register extends Component {
  render() {

    //如 果 浏 览 器 中 没 有 保 存 userid的 cookie,直 接 跳 转 到 login 
    // const userid = Cookies.get('userid')
    // if(!userid){
    //   this.props.history.replace('/login')
    //   return null
    // }
    return(
      <div>
        <Switch>
          <Route path='/laobaninfo' component={LaobanInfo}/>
          <Route path='/dasheninfo' component={DashenInfo}/>
        </Switch>
      </div>
    )
  }
}