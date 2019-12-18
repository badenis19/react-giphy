import React, { Component } from 'react';

class Gif extends Component {
  // define function outside of the render()
  selectImage = (event) => {
    return event.target.src;
  };

  sendData = (selectImage) => {
    this.props.parentCallback(this.props.id);
    // console.log(this.props)
  };

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/200w.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.sendData} />
    );
  }
}

export default Gif;
