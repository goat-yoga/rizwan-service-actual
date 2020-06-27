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

  handleSearch(e) {
    this.setState({ searchResults: e.target.value }, () => {
      setTimeout(() => {
        this.fetchSearchData();
        console.log(this.state);
      }, 500);
    })
  }

  render() {
    let { popularSuggestions, categories, pages, products } = this.state;

    return (
      <li>
        <input type="search" placeholder="Search" onChange={(e) => this.handleSearch(e)} />
        <div>
          {popularSuggestions.map((suggestion) => {
            return (<p></p>)
          })




          }
        </div>
      </li >
    )
  }
}