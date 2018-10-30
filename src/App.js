import React, { Component } from 'react';
import './App.css';
import Basic from "./Basic/Basic";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Calendar Playground
        </header>
        <body>
        <div className="d-none d-md-block">
            <Basic/>
        </div>
        </body>
      </div>
    );
  }
}

export default App;
