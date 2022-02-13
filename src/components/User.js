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
      tabhold : [{tokenname:'ether',value:3300,quantity:1},{tokenname:'btc',value:40000,quantity:1}],
      tabearn : [{tokenname:'ether',value:3300,quantity:1,earnedValueDaily: 10,apr:'15%'},{tokenname:'btc',value:40000,quantity:1,earnedValueDaily: 10,apr:'15%'}],
      tabtrade : [{tokenname:'ether',value:3300,quantity:1,entryPrice:3000,perf:'5%'},{tokenname:'btc',value:40000,quantity:1,entryPrice:30000,perf:'6%'}]
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


  render() {
    return(
    <div id='display_wallets'>
      {this.state.showPopup ? 
          <Popup onSubmit={(assetToAdd,wallet) =>{
            let tmp=0;
            
            // ^ Onclick appelé dans le return de <Popup> pour modifier les state tab

            console.log(this.state.tabhold);
            console.log(assetToAdd);
            console.log(wallet);
            //On push/pop l'asset dans le bon wallet :
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
          console.log(this.state.tabhold);}}
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
