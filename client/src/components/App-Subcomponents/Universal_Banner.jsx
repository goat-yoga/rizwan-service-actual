import React from 'react';

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
    return (
      <div>
      </div>
    )
  }
}