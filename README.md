# react路由的配置：

[react-router](https://github.com/ReactTraining/react-router)可以让根组件动态的去挂载不同的其他组件（比如本demo中的首页组件、新闻组件、商品组件），根据用户访问的地址动态加载不同的组件

1. 找到[官方文档](https://reacttraining.com/react-router/web/example/basic)：https://reacttraining.com/react-router/web/example/basic

2. 要配置路由，首先得引入 `react-router-dom` 模块

```sh
npm install react-router-dom --save
```

3. 找到项目的根组件引入react-router-dom

`import { BrowserRouter as Router, Route, Link } from "react-router-dom"`

4. 复制官网文档根组件里面的内容进行修改（加载的组件要提前引入）；在根组件里边配置路由，用`<Router></Router>`包裹起来；使用 `<Link to=''>` 实现路由的切换，也就是页面的跳转


```js
<Router>
  <Link to="/">首页</Link>
  <Link to="/news">新闻</Link>
  <Link to="/product">商品</Link>

  <Route exact path="/" component={Home} />
  <Route path="/news" component={News} />    
  <Route path="/product" component={Product} />   
</Router>
```

注意：**exact表示严格匹配**

# 页面传值

一个页面跳转到另一个页面进行传值：

1. get传值
2. 动态路由
3. localStorage

这里主要用到的是动态路由和get传值

## react动态路由传值

比如一个页面列表list点击不同item跳转到不同详情页，需要把item的值传入到详情页，这个时候就需要用到动态路由

1. 动态路由配置

`<Route path="/content/:aid" component={Content} />`

2. 对应的动态路由加载的组件里面获取传值

`this.props.match.params`

跳转：`<Link to={`/content/${value.aid}`}>{value.title}</Link>`

具体可以参考 New.js 组件到 Content.js 组件的传值方式

## react get传值  

1. 路由配置成静态即可

`<Route path="/productcontent" component={ProductContent} />`

2. 获取 this.props.location.search，可以通过 `url`模块解析出来，使用[url模块](https://www.npmjs.com/package/url)需要安装url模块

`cnpm install url --save`

具体可以参考 Product.js组件 到 ProductContent.js 组件的传值方式