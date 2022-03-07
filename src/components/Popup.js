import React from "react";
import DynamicForm from "./DynamicForm"
//import axios from "axios";


class Popup extends React.Component{
  constructor(){
    super()
    this.state = {
      Easset : {},
      wallet : '',
      isWallSelect : false
    }
  }
  printDyna(){
    if(this.state.isWallSelect)  {
    console.log("good idea");
   return <DynamicForm wallet={this.state.wallet} fullfilled={(x) => this.addDynamicProps(x)}/>
  }
    else  console.log('wallet non select');
  }

    addDynamicProps(struct){
      console.log('prop change en live');
      let tmpasset = this.state.Easset;

      tmpasset.APR = struct.APR;
      tmpasset.entryPrice = struct.entryPrice;
      
      this.setState({tmpasset});
    }

    render() {

    let wallet_to_update = this.state.wallet;   
    let asset = this.state.Easset;
   

      return (
        
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>

            <div id='managewindow'>
              <form onSubmit={(event)=>{
                  event.preventDefault();
                  console.log(asset);

                            //On check si l'ajout est corda : 
                            if( asset.quantity > 0 && typeof wallet_to_update === 'string'){
                              this.props.closePopup();
                              console.log(wallet_to_update);

                              this.setState({asset});
                              //On fait remonter asset{} et le wallet dans la fonction onSubmit de User.js
                              this.props.onSubmit(this.state.Easset,this.state.wallet);
                              
                            }
                            else{
                              alert('Saisie invalide, select again the coin');
                            }
                        }
                    }
                >
                <label>Wallet :</label>
                <select onChange={ (event) => 
                    {
                    //Récupère la value de l'option selectionnée grâce à la propriété selectedIndex
                        console.log(event.target[event.target.selectedIndex].value + ' selected')
                    //On inscrit le bon wallet dans une variable qu'on fera remonter dans <User>
                        wallet_to_update = event.target[event.target.selectedIndex].value;
                        this.setState({wallet : wallet_to_update});
                        this.setState({isWallSelect: true});
                    }
                  }>
                    <option value={null}>--Select--</option>
                    <option value="hold">Holding</option>
                    <option value="earn">Earning</option>
                    <option value="trade">Trading</option>
                </select>

                <label>Token :</label>
                <select onChange={(event)=>{
                  let tmpcoin = JSON.parse(event.target[event.target.selectedIndex].value)
                  console.log(tmpcoin);
                  //Ajout d'inputs du form en fonction du wallet (apr,perf...) : 

                  //On attribue a la struct asset les props fournies par l'API du token sélectionné   
                  asset.tokenname = tmpcoin.name;
                  asset.symbol = tmpcoin.symbol;
                  asset.price = tmpcoin.current_price;   
                  asset.image = tmpcoin.image;
                  //props api interessantes : highest/lowest 24H, price_change/change_pourcent
                }
                }>
                  <option value={null}>--Select--</option>
                  {
                  this.props.availableCryptos.map(token =>{
                  
                    return <option value={JSON.stringify(token)}key={token.symbol} style={{backgroundImage:'url('+token.image+')',height:2,width:2}}>{token.name + ' ' + token.symbol.toUpperCase()}</option>;
                       
                    })
                  
                }
                </select>
                
                <label>Quantity : </label>
                <input type="number" step="0.00001" placeholder="0" onChange={(event) => {
                    console.log(event.target.value);
                    asset.quantity = event.target.value;
                    asset.value = Math.round(asset.price * asset.quantity).toFixed(2);
                    
                   }
                  }/>          

                 {this.printDyna()}

                <button type="submit" >Enregistrer </button>
                </form>
            </div>

          <button onClick={this.props.closePopup}>Annuler</button>
          </div>
        </div>
      );
    }
  }

  export default Popup;