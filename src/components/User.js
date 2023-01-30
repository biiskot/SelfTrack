import React from "react";
import DisplayWallet from "./DisplayWallet";
import Popup from "./Popup";
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';

//Using Axios for https requests API
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
      isLoggedIn : true,
      showPopup : false,
      tabhold : [],
      tabearn : [],
      tabtrade : [],
      currency: '$USD'
    }

    if(this.props.logged){
      console.log("paname")
    }
  }

    setLoggedTrue(param){
       this.setState({isLoggedIn : true});
    }

  logout(){
    this.setState({
      isLoggedIn : false
    })
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
      console.log('component <user> updated :)');
    }
    
    formSubmitted(assetToAdd,wallet){
      // ^ Onclick appelé dans le return de <Popup> pour modifier les state tab

      let tmp=0;

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
          default : 
            console.log('pas de wallet select');
    }
    console.log('ajout effectué, tableau now : ')
    console.log(this.state);
  }
  
  updateTokensPrice(){
    
  }

  render() {
    if(this.state.isLoggedIn){
      console.log("affichage <user> loggedin");
      return(
        <div id='display_wallets'>
        <button onClick={this.logout}>Se déconnecter</button>
          {this.state.showPopup ? 
              <Popup onSubmit={(asset,wallet) => {
                //On listen le submit du form et on appelle la fct avec les paramètres remontés de Popup.js
                this.formSubmitted(asset,wallet);
              }}
                text='Manage'
                closePopup={this.togglePopup.bind(this)}
                availableCryptos = {initList}
              />
              : null
            }
          
          {/*Bouton pour faire apparaitre la popup pour modifier ses wallets : */}
          <button onClick={this.togglePopup.bind(this)}>MANAGE</button>
    
          {/*On crée 3 components : */}
          <div id='holdWallet'>
            <h2>H</h2>
             <DisplayWallet type="hold" currency={this.state.currency} tab={this.state.tabhold} />
          </div>
          <div id='earnWallet'>
            <h2>E</h2>
             <DisplayWallet type="earn" currency={this.state.currency} tab={this.state.tabearn} />
          </div>
          <div id='tradeWallet'>
              <h2>T</h2>
             <DisplayWallet type="trade" currency={this.state.currency} tab={this.state.tabtrade} />
          </div>
        </div>
        )
    }

    else {
      console.log("pas co");
      return(
        <div>
          <p>Page pas connecté </p>
          <Link to="/login">Se connecter</Link>
          <Link to="/inscription">S'inscrire</Link>
        </div>
      )
    }

  }
}

export default User;
