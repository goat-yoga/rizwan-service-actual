import React from 'react';

const BackArrow = (props) => {
  return (
    <div className="arrow-link back" onClick={() => props.displayBannerMsg(props.messageIndex, 'back')} >
      <p>BACK ARROW</p>
    </div>
  )
}

export default BackArrow;
