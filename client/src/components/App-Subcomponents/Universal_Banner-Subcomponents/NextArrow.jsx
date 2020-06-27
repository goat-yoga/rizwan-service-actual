import React from 'react';
import NextButton from './nextArrow.svg';

const NextArrow = (props) => {
  return (
    <div className="arrow-link next">
      <button name="next" onClick={() => props.displayBannerMsg(props.messageIndex, 'next')}>
        <NextButton />
      </button>
    </div >
  )
}

export default NextArrow;

