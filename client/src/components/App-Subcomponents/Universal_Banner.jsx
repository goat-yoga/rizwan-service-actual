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