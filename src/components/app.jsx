import React, { Component } from 'react';
// Components
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list.jsx';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "gdNmEIkMm2wUpspdTf"
    };
  }

  render() {
    const gifs = [
      { id: "gdNmEIkMm2wUpspdTf" },
      { id: "gjgWQA5QBuBmUZahOP"}
    ];
    return (
      //Note: passing information to the Gif component
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
