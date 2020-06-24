import React from 'react';

const BackArrow = (props) => {
  return (
    <div className="arrow-link back">
      <button onClick={() => props.displayBannerMsg(props.messageIndex, 'back')}> BACK ARROW </button>
    </div>
  )
}

export default BackArrow;
