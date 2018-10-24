import React, { Component } from 'react';
import './App.css';
import MyCalendar from "./MyCalendar/MyCalendar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Calendar Playground
        </header>
        <body>
            <MyCalendar/>
        </body>
      </div>
    );
  }
}

export default App;
