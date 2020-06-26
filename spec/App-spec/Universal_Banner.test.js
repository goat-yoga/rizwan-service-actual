import React from 'react';
import Universal_Banner from '../../client/src/components/App-Subcomponents/Universal_Banner.jsx';
import { shallow } from 'enzyme'

describe('Universal Banner', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Universal_Banner />);
  });


  it('displays first message when app is loaded', () => {
    let messages = wrapper.state('messages');
    let index = wrapper.state('messageIndex');
    let bannerMessage = 'NEW! FRESH BLUE 💙'
    expect(messages[index]).toBe(bannerMessage);
  })

  it('displays next message when next arrow is clicked', () => {
    let messages = wrapper.state('messages');
    let index = wrapper.state('messageIndex');
    let bannerMessage = 'NEW! FRESH BLUE 💙'
    expect(messages[index]).toBe(bannerMessage);
  })
});
