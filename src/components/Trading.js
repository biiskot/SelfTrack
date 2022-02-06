import React from "react";
import MainWallet from "./Main";
import EarningWallet from "./Earning";
import HoldingWallet from "./Holding";

class TradingWallet extends React.Component {
  constructor(props) {
    super(props);
  }
  addTrade(tkn, qtty, entry) {
    //addTrade
    let tradeStruct = {
      token: tkn,
      quantity: qtty,
      entryPrice: entry,
      value: qtty * tkn.price,
      perf: ((tkn.price * qtty) / entryPrice) * qtty * 100
    };
    this.tabTokensTrading.push(tradeStruct); //Tab to display
    this.tabTokens.push(tkn, qtyy);
  }
  transferHoldTrade(tkn, qtty, tradingprice) {
    //  let newtrade = new Trade();
    // Holding.removeToken(tkn, qtty);
  }
  transferTradeHold() {
    // this.removeToken(tkn, qtty);
    //  Holding.addToken(tkn, qtty);
  }
  render() {
    return (
      <div id="trading">
        <h2>Solde: {MyUser.mainwallet.solde}</h2>
        <displayWallet type="trade" tab={this.tabTokensTrading} />
      </div>
    );
  }
}

export default TradingWallet;
