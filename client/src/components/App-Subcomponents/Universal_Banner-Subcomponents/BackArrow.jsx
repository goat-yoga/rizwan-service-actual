import React from 'react';
import BackButton from './backArrow.svg';

const BackArrow = (props) => {
  return (
    <div className="arrow-link back">
      <button name="back" onClick={() => props.displayBannerMsg(props.messageIndex, 'back')}>
        <BackButton />
      </button>
    </div>
  )
}

export default BackArrow;
