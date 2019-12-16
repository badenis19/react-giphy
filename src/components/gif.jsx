import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media0.giphy.com/media/gdNmEIkMm2wUpspdTf/200.gif";
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
