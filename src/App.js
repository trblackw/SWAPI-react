import React, { Component } from 'react';
import logo from './sabers.svg';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SWAPI PLAY</h1>
          </header>
          <CharacterList />
        
      </div>
    );
  }
}

export default App;
