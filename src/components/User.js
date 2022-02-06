import React from "react";
import MainWallet from "./Main";
import EarningWallet from "./Earning";
import HoldingWallet from "./Holding";
import TradingWallet from "./Trading";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.pseudo = props.pseudo;
    this.uid = props.uid;
    //Components :
    this.mainwallet = <MainWallet />;
    this.holdwallet = <HoldingWallet />;
    this.earnwallet = <EarningWallet />;
    this.tradingwallet = <TradingWallet />;
  }
}

export default User;
