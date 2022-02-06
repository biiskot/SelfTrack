import React from "react";
import App from "../App";
import EarningWallet from "./Earning";
import HoldingWallet from "./Holding";
import TradingWallet from "./Trading";

//Objet wallet (1 principale et 3 détaillés)
class MainWallet extends React.Component {
  constructor(props) {
    super(props);
   // this.solde = Holding.solde + Earning.solde + Trading.solde;
   /* this.tabTokens = Holding.tabTokens
      .concat(MyUser.earnwallet.tabTokens)
      .concat(Trading.tabTokens); */
      this.solde = 0;
    this.PnL = 0;
  }
  render() {
    return (
      <div id="mainwallet">
        <calculSolde tab={this.tabTokens} solde={this.solde} />
        <displayWallet type="main" tab={this.tabTokens} />
      </div>
    );
  }
}

export default MainWallet;
