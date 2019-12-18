import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {

  state = { url: "Default" }

callbackFunction = (childData) => {
  this.setState({
    url: childData
  });
}

  renderList = () => {
    return this.props.gifs.map(gif => {
      // <Gif parentCallback={(this.callbackFunction)}/>
      return <Gif id={gif.id} key={gif.id} parentCallback={this.callbackFunction}/>;
      });
    }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
        <p>{this.state.url}</p>
      </div>

    );
  }
}

export default GifList;
