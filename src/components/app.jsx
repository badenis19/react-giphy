import React, { Component } from 'react';
// Components
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list'

class App extends Component {
  render() {
    return (
      //Note: passing information to the Gif component
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="gdNmEIkMm2wUpspdTf"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    );
  }
}

export default App;
