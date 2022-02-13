import logo from './logo.svg';
import './App.css';

import User from "./components/User";
import React from "react";
import MainWallet from './components/Main';
import HoldingWallet from './components/Holding';
import EarningWallet from './components/Earning';
import TradingWallet from './components/Trading';
import ManageTokensWindow from './components/ManageTokensWindow';



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
