import React from 'react';

const HeaderElement = (props) => {
  let { name, selection, headerSelection } = props

  // on click, change state of "selection" prop in parent component (header.jsx)
  // use ternary operator to add or remove selected class
  return (
    <li
      className={(selection === name) ? "header-item selected" : "header-item not-selected"}
      onClick={() => { headerSelection(name) }}
    >{props.name}</li>
  )
}

export default HeaderElement;