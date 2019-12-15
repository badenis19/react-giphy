import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

class Hello extends Component {

  constructor(props) {
    super(props); // so that we don't break React
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    // change the state
    this.setState({
      clicked: !this.state.clicked
    });
  }


  render() {
    // render method is called by react automatically
    // build and return HTML for the component
    return (
      // if the state of is true then we add the class clicked else nothing (TERNARY)
      <div className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}>
        Hello {this.props.name}
      </div>
    );
  }

}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Hello name="Bruno" />,
     root);
}
