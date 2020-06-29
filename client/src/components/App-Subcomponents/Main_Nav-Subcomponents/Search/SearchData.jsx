import React from 'react';

const SearchData = (props) => {
  let { popularSuggestions, categories, pages, products } = props.data;

  return (
    <div className="results">
      {console.log(products)}
      <ul>

        <li className="result-label">Popular Suggestions</li>
        {popularSuggestions.map((suggestion, index) => {
          return (<li className="search-suggestions" key={index}>{suggestion.page_name}</li>)
        })}

        <li className="result-label">Categories</li>
        {categories.map((category, index) => {
          return (<li className="search-categories" key={index}>{category.page_name}</li>)
        })}

        <li className="result-label">Pages</li>
        {pages.map((page, index) => {
          return (<li className="search-pages" key={index}>{page.page_name}</li>)
        })}

        <li className="result-label">Products</li>
        {products.map((product, index) => {
          return (<li className="search-products" key={index}>
            <a href={product.image} className="products-image"></a>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </li>)
        })}
      </ul>
    </div>
  )
}

module.exports = SearchData;