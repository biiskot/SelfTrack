import React from "react";
import DisplayWallet from "./DisplayWallet";
import Popup from "./Popup";

//Using Axios for hhtps requests API
import axios from "axios";

let numberFetchCoin = 100;
let initList = 0;
axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page="+numberFetchCoin+"&page=1&sparkline=false").then(
  (resp) => {
    initList = resp.data;
    console.log(initList);
  })

class User extends React.Component {
  constructor(props){
    super(props);
    this.pseudo = this.props.pseudo;
    this.uid = this.props.uid;
  
    
    this.state = {
      showPopup: false,
      tabhold : [],
      tabearn : [],
      tabtrade : [],
      currency: 'usd'
    }
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

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  componentDidMount(){
    
    console.log('U.I mounted');
    //On ping l'API CoinGecko une fois que l'user interface a été monté :
    axios.get("https://api.coingecko.com/api/v3/ping").then(
      (resp) => {
        console.log(resp.data);
      }
    )

    //this.setState(isLoggedIN:true)  modifier l'etat
  }

    componentDidUpdate(){
      console.log('<user> update');
    }
  formSubmitted(assetToAdd,wallet){
    
      let tmp=0;
      
      // ^ Onclick appelé dans le return de <Popup> pour modifier les state tab

      console.log(this.state.tabhold);
      console.log(assetToAdd);
      console.log(wallet);
      //On push l'asset dans le bon wallet, setState :
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
            availableCryptos = {initList}
          />
          : null
        }
      
      {/*Bouton pour faire apparaitre la popup pour modifier ses wallets : */}
      <button onClick={this.togglePopup.bind(this)}>MANAGE</button>

      {/*On crée 3 components : */}
      <div id='holdWallet'>
        <h2>HOLD</h2>
         <DisplayWallet type="trade" tab={this.state.tabhold} />
      </div>
      <div id='earnWallet'>
        <h2>EARN</h2>
         <DisplayWallet type="trade" tab={this.state.tabearn} />
      </div>
      <div id='tradeWallet'>
          <h2>TRADE</h2>
         <DisplayWallet type="trade" tab={this.state.tabtrade} />
      </div>
    </div>
    )
  }
}

export default User;
