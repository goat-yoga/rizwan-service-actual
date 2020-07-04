import React from 'react';
import Messages from './Banner-Comp/Messages.jsx';
import BackArrow from './Banner-Comp/BackArrow.jsx';
import NextArrow from './Banner-Comp/NextArrow.jsx';


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

  // index manipulation to display the right message
  // takes 'back' and 'next' only as argument for order arguments.
  // look at arrow subcomponents for better idea
  displayBannerMsg(index, order) {
    let { messages } = this.state

    if (order === 'next') {
      index++;
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