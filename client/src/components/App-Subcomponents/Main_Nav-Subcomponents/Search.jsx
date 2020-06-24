import React from 'react';
import axios from 'axios';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    // this.fetchSearchData = this.fetchSearchData.bind(this);
  }

  // TODO: send get request to display items when searching

  // Execute this function when user presses enter on search
  // fetchSearchData() {
  //   axios
  //     .get(`/search`, { search: this.state.searchResults })
  //     .then(response => setstate to many states and display it as search bar)
  // }

  handleSearch(e) {
    this.setState({ searchResults: e.target.value })
  }

  handleKeyPress(e) {
    if (event.key === 'Enter') { console.log('Pressed Enter!') }
  }

  // TODO: Have to render dropdown menu with DB items when searching
  render() {
    return (
      <li>
        <input type="search" placeholder="Search" onChange={(e) => this.handleSearch(e)} onKeyPress={(e) => this.handleKeyPress(e)} />
      </li >
    )
  }
}