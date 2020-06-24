import React from 'react';

const NextArrow = (props) => {
  return (
    <div className="arrow-link next"
      onClick={() => props.displayBannerMsg(props.messageIndex, 'next')} >
      <p>NEXT ARROW</p>
    </div >
  )

}

export default NextArrow;
