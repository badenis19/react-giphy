import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

class Hello extends Component {

  constructor(props) {
    super(props); // so that we don't break React
    // define initial state
    this.state = {
      clicked: false,
      counter: 0
    };
  }

  // defining a function which will be called in the render (in return)
  // ES6 notation required for it to work, bind it with arrow function
  handleClick = () => {
    // change the state
    this.setState({
      // will change the value of clicked to it's opposite (true/false OR false/true)
      clicked: !this.state.clicked,
      // will update/increment the counter on each click
      counter: this.state.counter + 1
    });
  }

  render() {
    // render method is called by react automatically
    // build and return HTML for the component
    return (
      // if the state of is true then we add the class clicked else nothing (TERNARY)
      <div className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}>
        Hello {this.props.name} {this.state.counter}
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
