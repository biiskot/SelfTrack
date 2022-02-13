import React from "react";
import App from "../App";
import DisplayWallet from "./DisplayWallet";



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
 //   this.setState({show: 1}); // appelle render()
    console.log(this.state); // probleme synchro
    //mise a jour du solde ttes les secondes
 
  }
  render() { 
    return (
      <div id="mainwallet">
        <DisplayWallet tab={this.props.tab} type="main"/>
      </div>
    );
  }
}

export default MainWallet;
