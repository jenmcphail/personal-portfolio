import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

class Portfolio extends Component {
    render(){
        return (<h1>Home Page / Portfolio</h1>);
    }
}

class About extends Component {
    render(){
        return (<h1>About Page</h1>);
    }
}

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={Portfolio} />
    <Route path="/about" component={About}/>
  </Router>,
  document.getElementById('app')
);