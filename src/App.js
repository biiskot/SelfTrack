import logo from './logo.svg';
import './App.css';

import User from "./components/User";
import React from "react";
import MainWallet from './components/Main';
import HoldingWallet from './components/Holding';
import EarningWallet from './components/Earning';
import TradingWallet from './components/Trading';


class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}


let tabtest = [{tokenname:'ether',value:3300,quantity:1},{tokenname:'btc',value:40000,quantity:1}];
let tabtest1 = [{tokenname:'ether',value:3300,quantity:1,earnedValueDaily: 10,apr:'15%'},{tokenname:'btc',value:40000,quantity:1,earnedValueDaily: 10,apr:'15%'}];

class App extends React.Component {
  constructor(){
    super();
  this.state = {
    showPopup: false
  };
  }
togglePopup() {
  this.setState({
    showPopup: !this.state.showPopup
  });
}
  render(){
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>

      <button onClick={this.togglePopup.bind(this)}>MANAGE</button>

      <h1>SelfTrack</h1>
      <h2>main :</h2>
      <MainWallet tab={tabtest}/>
      <h2>hold :</h2>
      <HoldingWallet tab={tabtest}/>
      <h2>earn :</h2>
      <EarningWallet tab={tabtest1}/>
      {/*<h2>trade :</h2>
      <TradingWallet/> */}

      {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }

    </div>
    )
  }
}

export default App;
