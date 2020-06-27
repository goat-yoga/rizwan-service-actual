import React from 'react';
import axios from 'axios';
import SearchData from './Search/SearchData.jsx';

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

  // fetches data based on search results
  handleSearch(e) {
    this.setState({ searchResults: e.target.value }, () => {
      setTimeout(() => {
        this.fetchSearchData();
      }, 500);
    })
  }

  render() {
    let { popularSuggestions, categories, pages, products } = this.state;

    // TODO: fix products.length later if not searching for products
    // TODO: change null in ternary operator if i'm getting weird error
    let showSearch = (products.length > 0) ? <SearchData
      data={this.state} /> :
      <div className="results"></div>;


    return (
      < li >
        <input type="search" placeholder="Search" onChange={(e) => this.handleSearch(e)} />

        {showSearch}
      </li >
    )
  }
}