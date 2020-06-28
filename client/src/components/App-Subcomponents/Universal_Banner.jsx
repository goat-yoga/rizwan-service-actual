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

  // increment index, if order is 'next'
  // initialize index if current index doesn't exist in msg list
  // decrement index, if order is 'back'
  // index is last message in list if index is negative

  // change state after index manipulation

  displayBannerMsg(index, order) {
    let { messages } = this.state

    if (order === 'next') {
      index++
      if (index === messages.length) { index = 0; }
    }

    if (order === 'back') {
      index--;
      if (index < 0) { index = messages.length - 1; }
    }

    this.setState({ messageIndex: index })
  }


  render() {
    let { messages, messageIndex } = this.state;
    return (
      <div className="univ-banner-container">
        <BackArrow
          displayBannerMsg={this.displayBannerMsg}
          messageIndex={this.state.messageIndex}
        />

        <Messages message={messages[messageIndex]} />

        <NextArrow
          displayBannerMsg={this.displayBannerMsg}
          messageIndex={this.state.messageIndex}
        />
      </div>
    )
  }
}