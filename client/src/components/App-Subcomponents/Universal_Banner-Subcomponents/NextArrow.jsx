import React from 'react';

const NextArrow = (props) => {
  return (
    <div className="arrow-link next">
      <button onClick={() => props.displayBannerMsg(props.messageIndex, 'back')}> NEXT ARROW </button>
    </div >
  )
}

export default NextArrow;
