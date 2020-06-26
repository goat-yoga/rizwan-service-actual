import React from 'react';
import Universal_Banner from '../../client/src/components/App-Subcomponents/Universal_Banner.jsx';
import NextArrow from '../../client/src/components/App-Subcomponents/Universal_Banner-Subcomponents/NextArrow.jsx';
import BackArrow from '../../client/src/components/App-Subcomponents/Universal_Banner-Subcomponents/BackArrow.jsx';;
import { shallow, mount } from 'enzyme'

describe('Universal Banner', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Universal_Banner />);
  });


  it('displays first message when app is loaded', () => {
    let messages = wrapper.state('messages');
    let index = wrapper.state('messageIndex');
    let bannerMessage = 'NEW! FRESH BLUE 💙'
    expect(messages[index]).toBe(bannerMessage);
  })

  it('displays next message when next arrow is clicked', () => {
    wrapper.find("button[name='next']").simulate("click");
    let messages = wrapper.state('messages');
    let index = wrapper.state('messageIndex');
    let bannerMessage = 'Spend $250 and get the Iconic Shopper Tote ($48 value)'
    expect(messages[index]).toBe(bannerMessage);

    wrapper.find("button[name='back']").simulate("click");
    let newBannerMessage = 'NEW! FRESH BLUE 💙';
    expect(messages[index]).toBe(newBannerMessage);
  })
});
