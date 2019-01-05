import React, { Component } from 'react'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      aid: ''
    }
  }

  //生命周期函数
  componentDidMount(){
    //获取动态路由的传值
    console.log(this.props.match.params.aid)
    this.setState({
      aid: this.props.match.params.aid
    })

  }

  render() {
    const { aid } = this.state
    return (
      <div>
        {`我是新闻详情组件${aid}`}
      </div>
    )
  }
}

export default Content