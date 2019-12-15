import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

class Hello extends Component {
  constructor(props) {
    super(props); // so that we don't break react
    this.state = {
      clicked: false
    };
  }


  render() {
    //build and return HTML for the component
    return (
      <div>Hello {this.props.name}</div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Bruno" surname="ADENIS " />, root);
}
