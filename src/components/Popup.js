import React from "react";
import axios from "axios";


class Popup extends React.Component{
    render() {

    console.log();

    let wallet_to_update='';   
    let asset ={};

      return (
        
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>

            <div id='managewindow'>
              <form onSubmit={(event)=>{
                  event.preventDefault();
                            
                            //On appelle onSubmit de <User> avec les paramètres associés

                            //On check si l'ajout est corda : 
                            if(asset!= null && asset.quantity > 0 && wallet_to_update!=null){
                              this.props.closePopup();

                              //On fait remonter asset{} et le wallet dans la fonction onSubmit de User.js
                              this.props.onSubmit(asset,wallet_to_update);
                              
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
                    
                    
                    }
                  }>
                    <option value={null}>--Select--</option>
                    <option value="hold">Holding</option>
                    <option value="earn">Earning</option>
                    <option value="trade">Trading</option>
                </select>
                <label>Token :</label>
                <select onChange={(event)=>{
                  let tmp = JSON.parse(event.target[event.target.selectedIndex].value)
                  console.log(tmp);
                  //Ajout d'inputs du form en fonction du wallet (apr,perf...) : 
                  switch(wallet_to_update){
                    case 'hold':
                    //On attribue a la struct asset les props du token sélectionné
                      asset = {
                        tokenname: tmp.id,
                        symbol: tmp.symbol,
                        value: tmp.current_price,
                        quantity: 1
                      }
                      break;
                    case 'trade':
                      asset = {
                        tokenname: tmp.id,
                        symbol: tmp.symbol,
                        value: tmp.current_price,
                        quantity: 1
                      }
                      break;
                    case 'earn':
                      asset = {
                        tokenname: tmp.id,
                        symbol: tmp.symbol,
                        value: tmp.current_price,
                        quantity: 1
                      }
                      break;
                    default:
                      alert('Choisissez un wallet');
                      asset=null;
                  }
                  console.log(asset);
                }
                }>
                  <option value={null}>--Select--</option>
                  {
                  this.props.availableCryptos.map(token =>{
                  
                    return <option value={JSON.stringify(token)}key={token.symbol} style={{backgroundImage:'url('+token.image+')',height:2,width:2}}>{token.name + ' ' + token.symbol.toUpperCase()}</option>;
                       
                    })
                  
                }
                </select>
                <button type="submit">Enregistrer </button>
                </form>
            </div>

          <button onClick={this.props.closePopup}>Annuler</button>
          </div>
        </div>
      );
    }
  }

  export default Popup;