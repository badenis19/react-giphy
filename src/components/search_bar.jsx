import React, { Component } from 'react'

class SearchBar extends Component {

  handleUpdate = (event) => {
    console.log(event.target)
  }

  render() {
    return (
      <input type="text" className="form-control form-search"
        onUpdate={this.handleUpdate}/>
    );
  }

}

export default SearchBar;
