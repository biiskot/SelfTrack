import React from "react";
import MainWallet from "./Main";
import EarningWallet from "./Earning";
import TradingWallet from "./Trading";
import DisplayWallet from "./DisplayWallet";

class HoldingWallet extends React.Component {
  constructor() {
    super();
   // this.props.solde = 0;
    //this.props.PnL = 0;
  //  this.props.tabTokens = [];
  }

  componentDidMount(){
    return <accessAPI/>
  }

  addToken(tkn, qtty, chain) {
    let holdStruct = {
      quantity: qtty,
      token: tkn,
      value: qtty * tkn.price,
      blockchain: chain
    };
    this.tabTokens.push(holdStruct); //Tab to display
  }
  removeToken(tkn, qtty) {
    //Trouver dans le tab holding le token et enlever la qtté voulue
    for (let i = 0; i < this.tabTokens.length; i++) {
      if (tkn.name == this.tabTokens[i].name) {
        if (qtty >= this.tabTokens[i].quantity) {
          this.tabTokens[i].pop();
        }
        else {
          this.tabTokens[i].quantity -= qtty; //retirer la bonne quantité
        }
      }
    }
  }

  render() {
    return (
      <div id="holding">
        <h2>Solde: {0}</h2>
        <DisplayWallet type="hold" tab={this.tabTokens} />
      </div>
    );
  }
}

export default HoldingWallet;
