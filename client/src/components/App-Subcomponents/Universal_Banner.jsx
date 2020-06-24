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

  // index refers to messageIndex
  displayBannerMsg(index, order) {
    // destruct state
    let { messages } = this.state

    // increment index, if order is 'next'
    if (order === 'next') {
      console.log(this.state.messageIndex)
      console.log(messages)
      this.setState({
        messageIndex: index++
      })
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
    console.log(index);
  }


  render() {
    let { messages, messageIndex } = this.state;
    return (
      <div className="Univ_Banner">
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