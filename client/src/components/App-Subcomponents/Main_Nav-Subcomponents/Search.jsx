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
      searchIsHovered: false
    }
    this.fetchSearchData = this.fetchSearchData.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchOn = this.searchOn.bind(this);
    this.searchOff = this.searchOff.bind(this);
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
      setTimeout(() => { this.fetchSearchData(); }, 500);
    })
  }

  searchOn() { this.setState({ searchWasClicked: true }) }

  searchOff() { this.setState({ searchWasClicked: false }) }

  render() {
    let { popularSuggestions, categories, pages, products, searchWasClicked } = this.state;

    // TODO: fix products.length later if not searching for products
    // TODO: change null in ternary operator if i'm getting weird error
    let showSearch = (products.length > 0) ? <SearchData
      data={this.state} /> :
      <div className="results"></div>;


    // toggles between bold search icon and regular search icon
    let SearchIcon =
      !searchWasClicked ?
        <div className="search-logo" onClick={this.searchOn} ><RegularSearch /></div> :
        <div className="search-logo" onClick={this.searchOff}> <BoldSearch /></div>;

    let InputField = !searchWasClicked ? null : <input className="search-input-field" type="search" placeholder="Search" onChange={(e) => this.handleSearch(e)} />;

    return (
      < li className="icon-search-bar">
        <div onClick={this.handleSearchToggler}>
          {SearchIcon}{InputField}
        </div>

        {showSearch}
      </li >
    )
  }
}