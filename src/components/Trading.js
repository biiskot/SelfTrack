import React from "react";
import DisplayWallet from "./DisplayWallet";
import CalculSolde from "./CalculSolde";

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
      perf: (((tkn.price * qtty) / entry) * 100)+'% ,'+'PnL : '
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
        <CalculSolde tab={this.props.tab} />
        <DisplayWallet type="trade" tab={this.props.tab} />
      </div>
    );
  }
}

export default TradingWallet;
