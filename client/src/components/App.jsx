import React from 'react';
import Universal_Banner from './App-Subcomponents/Universal_Banner.jsx';
import Header from './App-Subcomponents/Header.jsx';
import Main_Nav from './App-Subcomponents/Main_Nav.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Universal_Banner />
        <br />
        <Header />
        <br />
        <Main_Nav />
      </div>
    )
  }
}