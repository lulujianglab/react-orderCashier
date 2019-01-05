import React, { Component } from 'react'
//url模块来解析url地址
import url from 'url'

class ProductContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      aid: ''
    }
  }

  //生命周期函数
  componentDidMount(){
    // this.props.location.search

    //获取get传值
    console.log(url.parse(this.props.location.search,true))
    const { aid } =url.parse(this.props.location.search,true).query
    this.setState({
      aid
    })
  }

  render() {
    const { aid } = this.state
    return (
      <div>
        {`我是商品详情组件${aid}`}
      </div>
    )
  }
}

export default ProductContent