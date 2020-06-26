import React from 'react';

const BackArrow = (props) => {
  return (
    <div className="arrow-link back">
      <button name="back" onClick={() => props.displayBannerMsg(props.messageIndex, 'back')}> BACK ARROW </button>
    </div>
  )
}

export default BackArrow;
