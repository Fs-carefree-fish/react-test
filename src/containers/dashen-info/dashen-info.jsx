import React from 'react'
import { Component } from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


import HeaderSelector from '../../components/header-selector/header-selector'
import { updateUser } from '../../redux/actions'

class DashenInfo extends Component {

  state = {
    header: '', //头 像 名 称
    info: '', //个 人 简 介
    post: '', //求 职 岗 位
  }

  handleChange = (name, val) => {
    this.setState({ [name]: val })
  }

  //设 置 更 新 header 
  setHeader = (header) => {
    this.setState({ header })
  }

  render() {
    const { user } = this.props // 如 果 用 户 信 息 已 完 善 , 自 动 跳 转 到 大 神 主 界 面 
    if (user.header) {
      return <Redirect to='/dashen' />
    }

    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader} />
        <InputItem onChange={val => this.handleChange('post', val)}>
          求职岗位:
        </InputItem>
        <TextareaItem title="个人介绍:" rows={3}
          onChange={val => this.handleChange('info', val)} />
        <Button type='primary'
          onClick={() => this.props.updateUser(this.state)}>保存
        </Button>
      </div>
    )
  }
}

export default connect(
  state => ({ user: state.user }),
  { updateUser }
)(DashenInfo)