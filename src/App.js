import React, { Component } from 'react';
import './App.css';
import Basic from './Basic/Basic';
import CustomHeader from './CustomHeader/CustomHeader';
import Rendering from './Rendering/Rendering';
import CustomToolbar from './CustomToolbar/CustomToolbar';

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
            <CustomToolbar/>
            <Rendering />
            <CustomHeader/>
        </div>
        </body>
      </div>
    );
  }
}

export default App;
