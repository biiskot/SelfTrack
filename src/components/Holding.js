import React from "react";
import DisplayWallet from "./DisplayWallet";
import App from "../App";


class HoldingWallet extends React.Component {
  constructor(props) {
    super();

  }

  componentDidMount(){
    console.log('holding monté');
  
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
        <DisplayWallet type="hold" tab={this.props.tab} />
      </div>
    );
  }
}

export default HoldingWallet;
