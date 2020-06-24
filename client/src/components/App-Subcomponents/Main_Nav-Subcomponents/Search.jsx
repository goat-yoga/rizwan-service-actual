import React from 'react';
import axios from 'axios';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: '',
      popularSuggestions: [],
      categories: [],
      pages: [],
      products: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.fetchSearchData = this.fetchSearchData.bind(this);
  }

  // Execute this function when user presses enter on search
  fetchSearchData() {
    axios
      .get(`/search`, {
        params: { search: this.state.searchResults }
      })
      .then(response => {
        let { categories, pages, popularSuggestions, products } = response.data
        // ES6 Magic!! same as setting {pages: pages}
        this.setState({ popularSuggestions, categories, pages, products })
      })
  }

  // TODO: get rid of handleKeyPress later
  // and implement fetchSearchData in this function
  // handles changes to search input
  handleSearch(e) {
    this.setState({ searchResults: e.target.value })
  }

  // pressing enter displays data
  handleKeyPress(e) {
    if (event.key === 'Enter') { this.fetchSearchData() }
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