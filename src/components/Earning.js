import React from "react";
import App from "../App";
import DisplayWallet from "./DisplayWallet";

class EarningWallet extends React.Component {
  addTokenAPR(tkn, qtty, apr) {
    let earnStruct = {
      quantity: qtty,
      token: tkn,
      value: qtty * tkn.price,
      earnedValueDaily: (tkn.price * qtty * apr) / 100 / 365,
      apr: apr
    };

    this.tabTokensEarnings.push(earnStruct); //Tab to display
    this.tabTokens.push(tkn, qtty); //Résumé actifs calculSoldes()
  }
  transferHoldEarn(tkn, qtty, apr, rewrd_tkn) {
  //  Holding.removeToken(tkn, qtty); //On retire les fonds mis en earning du wallet holding
//    this.addToken();
    //On ajoute l'objet Earning au tableau du wallet
 //   this.addTokenAPR();
  }
  transferEarnHold(tkn, qtty) {
   // this.removeToken(tkn, qtty);
   // User.mainwallet.addToken(tkn, qtty);
  }
  render() {
    return (
      <div id="earning">
        <DisplayWallet type="earn" tab={this.props.tab} />
      </div>
    );
  }
}

export default EarningWallet;
