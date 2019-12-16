import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import '../assets/stylesheets/application.scss';
import App from './components/app';

const root = document.getElementById('root');

if (root) {
  // inserts App into the root element, does not replaces it
  ReactDOM.render(
    <App />,
    root);
}
