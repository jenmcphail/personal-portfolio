import React, {Component} from 'react';

import 'stylesheets/modules/nav.scss'

export default class Main extends Component {
  render(){
    return(
      <div>
        <nav className="nav">This is where the navbar goes</nav>
        {this.props.children}
      </div>
    );
  }
}
