import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  // Methods
  getImageIDGif = (gifId) => {
    // this lines are not needed
    // this.setState({
    //   imageIDGif: gifId
    // });
    // gifId is the id returned from gif.jsx, sending the getImageIDGif method
    this.props.getIdFunction(gifId);
  }

  renderList = () => {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} parentCallback={this.getImageIDGif}/>;
      });
    }

  // Render Method
  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
