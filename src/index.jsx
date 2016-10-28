import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

class App extends Component {
    render(){
        return (<h1>Hi</h1>);
    }
}

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('app')
);