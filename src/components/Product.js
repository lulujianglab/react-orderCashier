import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[
        {
            aid:'11',
            title:'我是商品1111'
        },
        {
            aid:'222',
            title:'我是商品222'
        },
        {
            aid:'3',
            title:'我是商品333'
        },
        {
            aid:'4',
            title:'我是商品4444'
        }
      ]
    }
  }

  render() {
    return (  
      <div>
        我是商品组件
        <ul>
          {
            this.state.list.map((value,key)=>{
              return (
                <li key={key}>                                   
                    <Link to={`/productcontent?aid=${value.aid}`}>{value.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Product