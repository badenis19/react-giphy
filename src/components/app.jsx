import React, { Component } from 'react';
import giphy from 'giphy-api';

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

    // this.search("homer thinking");
  }

  getImageIDGifList = (childData) => {
  this.setState({
    selectedGifId: childData
  });
}


  search = (query) => {
    //API call
    giphy('r35prwV5W8icbEFDqy3FmaxthzVv45d4').search({
      q: query,
      rating: 'g',
      limit: 5
    }, (error, result) => {
      this.setState({
        gifs: result.data
        });
    });
  }

  render() {
    const gifs = [
      { id: "gdNmEIkMm2wUpspdTf" },
      { id: "gjgWQA5QBuBmUZahOP" }
    ];
    return (
      //Note: passing information to the Gif component
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} getIdFunction={this.getImageIDGifList} />
        </div>
      </div>
    );
  }
}

export default App;
