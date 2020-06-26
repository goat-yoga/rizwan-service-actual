import React from 'react';

const NextArrow = (props) => {
  return (
    <div className="arrow-link next">
      <button name="next" onClick={() => props.displayBannerMsg(props.messageIndex, 'next')}> NEXT ARROW </button>
    </div >
  )
}

export default NextArrow;
