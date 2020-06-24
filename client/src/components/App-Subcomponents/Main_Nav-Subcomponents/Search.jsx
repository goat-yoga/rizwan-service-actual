import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // TODO: send get request to display items when searching

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