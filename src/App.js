import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Homepage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
