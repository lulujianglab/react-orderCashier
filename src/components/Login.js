import React, { Component } from 'react'
import {Redirect} from "react-router-dom"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      loginFlag:false            
    }
  }

  doLogin = (e) => {
    e.preventDefault(); // 阻止浏览器执行一个默认行为，因为用onSubmit会默认刷新页面
    let username = this.refs.username.value
    let password = this.refs.password.value
    console.log(username,password)

    if (username === 'admin' && password === '123456') {
      //登录成功   跳转到首页
      this.setState({
        loginFlag: true
      })
    } else {
      alert('登录失败')
    }
  }

  render() {
    if (this.state.loginFlag) {

      // return <Redirect to={{ pathname: "/" }} />
      return <Redirect to='/' />
    }

    return (    
      <div className='wrapper'>
        <form onSubmit={this.doLogin}>
          <div className='input'><input placeholder='admin' type="text"  ref="username" /></div>
          <div className='input'><input placeholder='123456' type="password"  ref="password" /></div>
          <input type="submit"  value="执行登录"/>
        </form>
      </div>
    )
  }
}

export default Login