import logo from './logo.svg';
import './App.css';

import User from "./components/User";
import React from "react";
import MainWallet from './components/Main';
import HoldingWallet from './components/Holding';
import EarningWallet from './components/Earning';
import TradingWallet from './components/Trading';

let tabtest = [{tokenname:'ether',value:3300,quantity:1},{tokenname:'btc',value:40000,quantity:1}];

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>titre</h1>
        <h2>main :</h2>
        <MainWallet tab={tabtest}/>
        {/*<h2>hold :</h2>
        <HoldingWallet/>
        <h2>earn :</h2>
        <EarningWallet/>
        <h2>trade :</h2>
       <TradingWallet/> */}
      </header>
    </div>
  );
}

export default App;
