import React from "react";
import MainWallet from "./Main";
import EarningWallet from "./Earning";
import TradingWallet from "./Trading";

class HoldingWallet extends React.Component {
  constructor() {
    this.solde = 0;
    this.PnL = 0;
    this.tabTokens = new Array();
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
        if (qtty >= this.tabTokens[i].quantity) this.tabTokens[i].pop;
        else this.tabTokens[i].quantity -= qtty; //retirer la bonne quantité
      }
    }
  }

  render() {
    return (
      <div id="holding">
        <h2>Solde: {MyUser.mainwallet.solde}</h2>
        <displayWallet type="hold" tab={this.tabTokens} />
      </div>
    );
  }
}

export default HoldingWallet;
