import React from "react";
import MainWallet from "./Main";
import EarningWallet from "./Earning";
import HoldingWallet from "./Holding";
import TradingWallet from "./Trading";
import App from "../App";

//Component return div liste elements tab
function DisplayWallet(props) {
  let usedtab = props.tab;
  
  switch (props.type) {
    case "main" || "hold":
      let listTokens = usedtab.map((asset)=>{
        <li key={asset.tokenname}>
          token :{asset.tokenname}, qtty :{asset.quantity}, value :
          {asset.value}
        </li>
      }
     );
      return (
      <ul>{listTokens}</ul>
      );
    case "earn":
            return (
              <li>
            {/*    token :{asset.token}, qtty :{asset.qtty}, value :{asset.value}, */}
                {/*apr: {asset.apr}, estimation gain/J :{asset.earnedValueDaily}*/}
              </li>
            );
    case "trade":
            return (
            {/*  <li>
                token :{asset.token}, qtty :{asset.quantity}, value :
                {asset.value}, entryprice :{asset.entryPrice}
                {asset.entryPrice}, perfo : {asset.perf}
            </li> */}
            );
    default:
      console.log("suce");
      return(
        <ul>
          <li>default</li>
        </ul>
      )
  }
}

export default DisplayWallet;
