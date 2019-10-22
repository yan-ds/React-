import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

export default function WithCheckLogin(WrappedComponent){
   @connect (state => ({hasLogin:state.user.hasLogin}))

   class HocComponent extends React.Component{

    render(){
      const path = this.props.location.pathname
      const {hasLogin,...rest} = this.props//rest是包含其他所有属性的对象

      //如果请求的是login,但已经登录,自动跳转到admin
      if (path === '/login' && hasLogin) return <Redirect to="/"/>
      //如果请求的不是login,但没有登录,自动跳转到login
      if(path !== '/login' && !hasLogin) return <Redirect to="/login"/>

      return <WrappedComponent {...rest}/>
    } 
   }
return HocComponent
}