/* imports react and framework dependencies */
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory,} from 'react-router'

/* Imports components */
import Portfolio from './Components/Portfolio.jsx'
import About from './Components/About.jsx'
import Main from './Components/Main.jsx'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Portfolio} />
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('app')
);