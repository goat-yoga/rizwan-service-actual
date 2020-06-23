import React from 'react';
import Universal-Banner from './App-Subcomponents/Universal-Banner.jsx';
import Header from './App-Subcomponents/Header.jsx';
import Main-Nav from './App-Subcomponents/Main-Nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Universal-Banner />
        <Header />
        <Main-Nav />
      </div>
    )
  }
}