import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom"


export default  function WithCheckLogin(WrappedComponent){
  //WrappedComponent被包装组件
//高阶组件函数返回一个新的组件

@connect(state => ({hasLogin:state.user.hasLogin}))
}class HocComponent extends React.Component{

  render(){
    const path = this.props.location.pathname
    const {hasLogin,...rest} = this.props
  }
}