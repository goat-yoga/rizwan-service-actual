import React from 'react';
import Universal_Banner from '../../client/src/components/App-Subcomponents/Universal_Banner.jsx';
import { mount } from 'enzyme'

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

  it('displays correct message when next or back arrow is clicked', () => {
    wrapper.find("button[name='next']").simulate("click");
    let messages = wrapper.state('messages');
    let index = wrapper.state('messageIndex');
    let bannerMessage = 'Spend $250 and get the Iconic Shopper Tote ($48 value)';
    expect(messages[index]).toBe(bannerMessage);

    wrapper.find("button[name='back']").simulate("click");
    let newIndex = wrapper.state('messageIndex');
    let newBannerMessage = 'NEW! FRESH BLUE 💙';
    expect(messages[newIndex]).toBe(newBannerMessage);
  })

  it('displays correct message due to function edge case', () => {
    wrapper.find("button[name='back']").simulate("click");
    let messages = wrapper.state('messages');
    let index = wrapper.state('messageIndex');
    let bannerMessage = 'NEW KICKS JUST DROPPED!';
    expect(messages[index]).toBe(bannerMessage);

    wrapper.find("button[name='next']").simulate("click");
    let newIndex = wrapper.state('messageIndex');
    let newBannerMessage = 'NEW! FRESH BLUE 💙';
    expect(messages[newIndex]).toBe(newBannerMessage);
  })
});
