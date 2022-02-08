import React from 'react';

//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
let accessAPI= async() => {
  let data = await CoinGeckoClient.ping();
  
};
/*
function accessAPI(props){
    props.data = await CoinGeckoClient.ping();
    console.log(await CoinGeckoClient.coins.all());
    return(
        <div id='api'>
            <p>{await CoinGeckoClient.coins.all()}</p>
        </div>
    )
}
*/
export default accessAPI;
