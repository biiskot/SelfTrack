import logo from './logo.svg';
import './App.css';

import User from "./components/User";
import React from "react";
import MainWallet from './components/Main';
import HoldingWallet from './components/Holding';
import EarningWallet from './components/Earning';
import TradingWallet from './components/Trading';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>SelfTrack</h1>
        <h2>main :</h2>
        <MainWallet />
        {/*<h2>hold :</h2>
        <HoldingWallet/>
        <h2>earn :</h2>
        <EarningWallet/>
        <h2>trade :</h2>
       <TradingWallet/> */}
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
