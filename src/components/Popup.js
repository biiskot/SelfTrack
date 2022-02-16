import React from "react";

const CoinMarketCap = require('coinmarketcap-api')

const apiKey = '46e87d12-66f5-4c68-9b98-a0749a126d62'
const client = new CoinMarketCap(apiKey)

client.getTickers().then(console.log).catch(console.error)
client.getGlobal().then(console.log).catch(console.error)

class Popup extends React.Component{
    render() {

    console.log();

    let wallet_to_update='';
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>

            <div id='managewindow'>
              <form onSubmit={(event)=>{
                  event.preventDefault();
                        let asset = {
                            tokenname:'tokenname',
                            value:100,
                            quantity:1
                        }
                            this.props.closePopup();
                            //On appelle onSubmit de <User> avec les paramètres associés
                  
                            this.props.onSubmit(asset,wallet_to_update);
                        }
                    }
                >
                <label>Nom :</label>
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