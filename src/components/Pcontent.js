import React, { Component } from 'react'
import { Link } from "react-router-dom"

const axios = require('axios')

class Pcontent extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      list:[],
      domain:'http://a.itying.com/'
    }
  }

  requestData(id){
    var api=`${this.state.domain}api/productcontent?id=${id}`
    axios.get(api)
    .then((response)=>{         
      console.log(response)
      this.setState({
        list:response.data.result[0]
      })
    })
    .catch(function (error) {         
      console.log(error)
    })
  }

  componentDidMount(){
    //id
    console.log(this.props.match.params.id)
    let id=this.props.match.params.id
    if(id) {
      this.requestData(id)
    }
  }

  render() {
    return (
      <div className="pcontent">
        <div className="back">  <Link to='/'>返回</Link></div>
        <div className="p_content">
          <div className="p_info">
            {this.state.list.img_url? <img src={`${this.state.domain}${this.state.list.img_url}`} /> : ''}
            <h2>{this.state.list.title}</h2>
            <p className="price">{this.state.list.price}/份</p>
          </div>
          <div className="p_detial">
            <h3>
              商品详情					
            </h3>
            <div className="p_content"  dangerouslySetInnerHTML={{__html: this.state.list.content}}> 
                
            </div>
          </div>
        </div>
        
        <footer className="pfooter">
          <div className="cart">
            <strong>数量:</strong>
            <div className="cart_num">
            <div className="input_left">-</div>
            <div className="input_center">
              <input type="text"  readOnly="readonly" value="1" name="num" id="num" />
            </div>
            <div className="input_right">+</div>    
            </div>
          </div>
          <button className="addcart">加入购物车</button>	
        </footer>
      </div>
    )
  }
}

export default Pcontent