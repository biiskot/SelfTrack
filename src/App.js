import logo from './logo.svg';
import './App.css';

import User from "./components/User";
import React from "react";


class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
    <div className="App">
      <header className="App-header">
      </header>
        <h1>SelfTrack</h1>
        <User/>
      
    </div>
    )
  }
}

export default App;
