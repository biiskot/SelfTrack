import logo from './logo.svg';
import './App.css';

import User from "./components/User";
import React from "react";

console.log(myUser.mainwallet);

let myUser = <User pseudo='test' uid='001'/>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>SelfTrack</h1>

      <div id="mainwallet">
        <p id="soldeTotal">{myUser.mainwallet.solde}</p>
      </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
