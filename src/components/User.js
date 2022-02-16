import React from "react";
import MainWallet from "./Main";
import EarningWallet from "./Earning";
import HoldingWallet from "./Holding";
import TradingWallet from "./Trading";
import Popup from "./Popup";

class User extends React.Component {
  constructor(props){
    super(props);
    this.pseudo = this.props.pseudo;
    this.uid = this.props.uid;
  
    
    this.state = {
      showPopup: false,
      tabhold : [{tokenname:'',value:1,quantity:1}],
      tabearn : [],
      tabtrade : [{tokenname:'ether',value:3300,quantity:1,entryPrice:3000,perf:'5%'}]
    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  componentDidMount(){

    //this.setState(isLoggedIN:true)  modifier l'etat
  }

  formSubmitted(assetToAdd,wallet){
    
      let tmp=0;
      
      // ^ Onclick appelé dans le return de <Popup> pour modifier les state tab

      console.log(this.state.tabhold);
      console.log(assetToAdd);
      console.log(wallet);
      //On push l'asset dans le bon wallet :
      switch (wallet){
        case 'hold': 
          tmp = this.state.tabhold;
          tmp.push(assetToAdd);
          this.setState(
            {
              tabhold : tmp
          });
        break;
        case 'earn':
          tmp = this.state.tabearn;
          tmp.push(assetToAdd);
          this.setState(
            {
              tabearn : tmp
          });
        break;
        case 'trade':
          tmp = this.state.tabtrade;
          tmp.push(assetToAdd);
          this.setState(
            {
              tabtrade : tmp
          });
          break;
    }
    console.log('apres : ')
    console.log(this.state.tabhold);
  }
  

  render() {
    return(
    <div id='display_wallets'>
      {this.state.showPopup ? 
          <Popup onSubmit={(asset,wallet) => {
            //On listen le submit du form et on appelle la fct avec les paramètres remontés de Popup.js
            this.formSubmitted(asset,wallet);
          }}
            text='Manage your assets'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      
      {/*Bouton pour faire apparaitre la popup pour modifier ses wallets : */}
      <button onClick={this.togglePopup.bind(this)}>MANAGE</button>

      {/*On crée 3 components : */}
      <HoldingWallet tab={this.state.tabhold}/>
      <EarningWallet tab={this.state.tabearn}/>
      <TradingWallet tab={this.state.tabtrade}/>
    </div>
    )
  }
}

export default User;
