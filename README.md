# 无人点餐项目：

移动端项目需要注意

1. 添加 viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

2. rem 单位换算，可查看我的另一篇博客[https://github.com/lulujianglab/blog/issues/15](https://github.com/lulujianglab/blog/issues/15)

另外需要注意的是 react 解析 html

可以查看[官方文档](https://reactjs.org/docs/dom-elements.html)的介绍：https://reactjs.org/docs/dom-elements.html
    
```js
<div className="p_content"  dangerouslySetInnerHTML={{__html: this.state.list.content}}> </div>
```

后台已经允许跨域了，所以我们直接引入 [axios](https://github.com/axios/axios) ，请求 api 接口

## Install

```sh
npm install
```

## Compile

```sh
Compile
```

## Build

```sh
npm run build
```

# bug fixed

注意，我们在 Pcontent.js 组件的 render 中加载 state 里边的数据时，要做一个有无的判断

比如，加载图片请求路径的代码，如果直接在 render 中写

```js
<img src={`${this.state.domain}${this.state.list.img_url}`} />
```

页面就会有一个报错提示

![image](https://user-images.githubusercontent.com/26807227/50734153-61eae100-11d5-11e9-9bf3-70af2485ded3.png)

因为 render 的执行顺序是要早于 componentDidMount,而 state 里边的 list 数组是通过在 componentDidMount 中请求接口数据拿到的，所以 render 最开始执行的时候会 undefined ，但由于执行 componentDidMount 拿到请求数据后执行 setState ,所以会触发 render 的再次执行，也就能正常挂载数据了

所以正确的操作方法应该是

```js
{this.state.list.img_url? <img src={`${this.state.domain}${this.state.list.img_url}`} /> : ''}
```

这里衍生一个知识点，也就是 **Reac t请求数据为什么绝大部分要在 componentDidMount 方法里面操作呢？**

这与 React 组件的生命周期有关，组件挂载时有关的生命周期有以下几个：

* constructor()

* componentWillMount()

* render()

* componentDidMount()

上面这些方法的调用是有次序的，由上而下，也就是当说如果你要获取外部数据并加载到组件上，只能在组件"已经"挂载到真实的网页上才能作这事情，其它情况你是加载不到组件的

componentDidMount 方法中的代码，是在组件已经完全挂载到网页上才会调用被执行，所以可以保证数据的加载。此外，在这方法中调用 setState 方法，会触发重渲染。所以，官方设计这个方法就是用来加载外部数据用的，或处理其他的副作用代码

constructor 被调用是在组件准备要挂载的最一开始，所以此时组件尚未挂载到网页上

componentWillMount 方法的调用在 constructor 之后，在 render 之前，在这方法里的代码调用 setState 方法不会触发重渲染，所以它一般不会用来作加载数据之用，它也很少被使用到

一般的从后台(服务器)获取的数据，都会与组件上要用的数据加载有关，所以都在 componentDidMount 方法里面操作

虽然与组件上的数据无关的加载，也可以在 constructor 里操作，但 constructor 是做组件 state 初绐化工作的，并不是设计来作加载数据这工作的，所以所有有副作用的代码都会集中在 componentDidMount 方法里

# 实现js跳转路由

[官方文档demo](https://reacttraining.com/react-router/web/example/auth-workflow)：https://reacttraining.com/react-router/web/example/auth-workflow

1. 要引入 Redirect

```js
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom"
```

2. 定义一个 flag

```js
this.state = { 
  loginFlag: false            
} 
```

3. render 里面判断 flag 来决定是否跳转

```js
if(this.state.loginFlag){
  return <Redirect to={{ pathname: "/" }} />
}
```

4. 要执行 js 跳转

通过 js 改变 loginFlag 的状态

改变以后从新 render 就可以通过 Redirect 自己来跳转

