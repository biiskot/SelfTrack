import React from "react";
import MainWallet from "./Main";
import EarningWallet from "./Earning";
import HoldingWallet from "./Holding";
import DisplayWallet from "./DisplayWallet";

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
      perf: ((tkn.price * qtty) / entry) * qtty * 100
    };
    this.tabTokensTrading.push(tradeStruct); //Tab to display
    this.tabTokens.push(tkn, qtty);
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
        <h2>Solde: {}</h2>
        <DisplayWallet type="trade" tab={this.tabTokensTrading} />
      </div>
    );
  }
}

export default TradingWallet;
