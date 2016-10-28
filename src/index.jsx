import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
import Portfolio from './Components/Portfolio.jsx'
import About from './Components/About.jsx'

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={Portfolio} />
    <Route path="/about" component={About}/>
  </Router>,
  document.getElementById('app')
);