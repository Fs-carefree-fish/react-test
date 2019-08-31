import React, { Component } from 'react'
import { List, Grid } from 'antd-mobile'
import PropTypes from 'prop-types'

export default class HeaderSelector extends Component {

  static propTypes = {
    setHeader: PropTypes.func.isRequired
  }

  state = { icon: null }


  constructor(props) {
    super(props)
    this.headerList = []
    for (var i = 0; i < 20; i++) {
      const text = `头像${i + 1}`
      this.headerList.push({
        text,
        icon: require(`../../assets/imgs/${text}.png`)
      })
    }
  }

  selectHeader = ({ icon, text }) => {
    // 更 新 当 前 组 件 的 状 态 
    this.setState({ icon })
    // 更 新 父 组 件 的 状 态  此函数必须和父组件中的函数一样
    this.props.setHeader(text) 
  }

  render() {
    //计 算 头 部 显 示 
    const { icon } = this.state
    const gridHeader = icon ? <p>已选择头像: <img src={icon} alt="header" /></p> : '请选择头像'

    return (
      <List renderHeader={() => gridHeader}>
        <Grid
          data={this.headerList}
          columnNum={5}
          // 子组件给父组件传值
          onClick={this.selectHeader} />
      </List>
    )
  }
}