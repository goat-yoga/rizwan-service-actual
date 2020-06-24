import React from 'react';
import Universal_Banner from './App-Subcomponents/Universal_Banner.jsx';
import Header from './App-Subcomponents/Header.jsx';
import Main_Nav from './App-Subcomponents/Main_Nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Universal_Banner />
        <Header />
        <Main_Nav />
      </div>
    )
  }
}