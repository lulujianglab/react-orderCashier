import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './components/Home'
import News from './components/News'
import Product from './components/Product'
import Content from './components/Content'
import ProductContent from './components/ProductContent'
import './assets/css/index.css'

class App extends Component {

  render() {
    return (
      <Router>
        <div>           
          <header className="title">
            <Link to="/">首页</Link>
            <Link to="/news">新闻</Link>
            <Link to="/product">商品</Link>
          </header>

          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />    
          <Route path="/product" component={Product} />

          <Route path="/productcontent" component={ProductContent} />
          <Route path="/content/:aid" component={Content} />               
        </div>
      </Router>
    )
  }
}

export default App
