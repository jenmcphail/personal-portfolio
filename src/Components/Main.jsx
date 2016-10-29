import React, {Component} from 'react';

export default class Main extends Component {
  render(){
    return(
      <div>
        <nav>This is where the navbar goes</nav>
        {this.props.children}
      </div>
    );
  }
}