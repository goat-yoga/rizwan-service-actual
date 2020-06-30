import React from 'react';
import axios from 'axios';
import SearchData from './Search/SearchData.jsx';
import BoldSearch from './Search/search-bold.svg';
import RegularSearch from './Search/search-regular.svg';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: '',
      popularSuggestions: [],
      categories: [],
      pages: [],
      products: [],
      searchWasClicked: false,
    }

    this.fetchSearchData = this.fetchSearchData.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.hideSearch = this.hideSearch.bind(this);
  }

  // Gets search results from DB
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

  // fetches data based on user input after 500 ms.
  handleSearch(e) {
    this.setState({ searchResults: e.target.value }, () => {
      setTimeout(() => { this.fetchSearchData(); }, 500);
    })
  }

  // click on search icon -> icon turns bold and input field is shown
  // if icon is bold and is clicked -> input field disappears and icon regresses to normal state
  showSearch() { this.setState({ searchWasClicked: true }) }
  hideSearch() { this.setState({ searchWasClicked: false }) }

  render() {
    let { searchResults, popularSuggestions, categories, pages, products, searchWasClicked } = this.state;

    // toggles between icon based on icon click
    let SearchIcon =
      (!searchWasClicked) ?
        <div className="search-logo" onClick={this.showSearch}>
          <RegularSearch />
        </div > :

        <div className="search-logo" onClick={this.hideSearch}>
          <BoldSearch />
        </div >
      ;

    // imput field is not shown if icon not clicked, else field is rendered.
    let InputField = !searchWasClicked ? null : <input className="search-input-field" type="search" placeholder="Search" onChange={(e) => this.handleSearch(e)} />;

    // show search results based on what was searched or if icon is active
    let showSearch = (searchResults.length > 0) ?
      <SearchData data={this.state} /> :

      (searchWasClicked) ?
        <div className="search-results empty">
          <em>Start typing for instant search results</em>
        </div> : null;

    return (
      < li className="icon-search-bar">
        <div className="search-icon-and-field" onClick={this.handleSearchToggler}>
          {SearchIcon}{InputField}
        </div>

        {showSearch}
      </li >
    )
  }
}