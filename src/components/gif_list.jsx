import React, { Component } from 'react';
import Gif from './gif.jsx'

class GifList extends Component {

  renderList = () => {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} />
      });
    }

  render() {
    return (
      <div className="git-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;


// class GifList extends Component {
//   render() {
//     return (
//       <div className="git-list">
//         {this.props.gifs.map(gif => {
//         return <Gif id={gif.id} key={gif.id} />
//         })}
//       </div>
//     );
//   }
// }
