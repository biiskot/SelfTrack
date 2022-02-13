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

  updateWallet(asset){
    console.log(this.state.tabhold);
    
    this.setState({
      tabhold : this.state.tabhold.push(asset)
    });
    console.log('apres : ')
    console.log(this.state.tabhold);
  }



  render() {
    return(
    <div id='display_wallets'>
      {this.state.showPopup ? 
          <Popup onClick={(assetToAdd) =>this.updateWallet(assetToAdd)}
            text='Manage your assets'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      <button onClick={this.togglePopup.bind(this)}>MANAGE</button>

      <HoldingWallet tab={this.state.tabhold}/>
      <EarningWallet tab={this.state.tabearn}/>
      <TradingWallet tab={this.state.tabtrade}/>
    </div>
    )
  }
}

export default User;
