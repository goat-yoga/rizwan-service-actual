import React from 'react';

const HeaderElement = (props) => {
  let { name, selection, headerSelection } = props
  return (
    <li
      className={(selection === name) ? "header-item selected" : "header-item"}
      onClick={() => { headerSelection(name) }}
    >{props.name}</li>
  )
}

export default HeaderElement;