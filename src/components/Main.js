import React from "react";
import App from "../App";
import EarningWallet from "./Earning";
import HoldingWallet from "./Holding";
import TradingWallet from "./Trading";
import CalculSolde from "./CalculSolde";
import DisplayWallet from "./DisplayWallet";

let tab = [{tokenname:'ether',value:3300,quantity:1},{tokenname:'btc',value:40000,quantity:1}];

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
    this.tabTokens = [{value: 3000,token:'ether',quantity:1}];
    this.state = {show:0};
  }

  componentDidMount(){
    console.log('main monté');
    this.setState({show: 1});
    console.log(this.state); // probleme synchro
    //mise a jour du solde ttes les secondes

  }
  render() {
    return (
      <div id="mainwallet">
        <p>balise p</p>
        <CalculSolde tab={tab} solde={this.solde} />
        <DisplayWallet tab={tab} type='main'/>
      </div>
    );
  }
}

export default MainWallet;
