/* imports react and framework dependencies */
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

/* Imports components */
import Portfolio from './Components/Portfolio.jsx'
import About from './Components/About.jsx'
import Main from './Components/Main.jsx'

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Portfolio} />
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('app')
);