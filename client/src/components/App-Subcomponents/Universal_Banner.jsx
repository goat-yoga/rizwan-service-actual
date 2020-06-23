import React from 'react';
import Messages from './Universal_Banner-Subcomponents/Messages.jsx';
import BackArrow from './Universal_Banner-Subcomponents/BackArrow.jsx';
import NextArrow from './Universal_Banner-Subcomponents/NextArrow.jsx';


export default class Universal_Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'NEW! FRESH BLUE 💙',
        'Spend $250 and get the Iconic Shopper Tote ($48 value)',
        'GUYS, YOU NEED THIS NEWNESS RN',
        'NEW KICKS JUST DROPPED!'
      ],
      messageIndex: 0
    }
    this.displayBannerMsg = this.displayBannerMsg.bind(this);
  }

  // index refers to msgIndex
  displayBannerMsg(index, order) {
    let { messages } = this.state
    // increment index, if order is 'next'
    if (order === 'next') {
      index++;
      // initialize index
      // if index is equal to msgs.length
      if (index === messages.length) { index = 0; }
    }

    // if order is 'back', decrement index
    if (order === 'back') {
      // decrement index
      index--;
      // index is last message in list if index is negative
      if (index < 0) { index = messages.length - 1; }
    }
  }


  render() {
    let { messages, messageIndex } = this.state;
    return (
      <div>
        <BackArrow />
        <Messages message={messages[messageIndex]} />
        <NextArrow />
      </div>
    )
  }
}