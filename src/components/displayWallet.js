import React from "react";
import MainWallet from "./Main";
import EarningWallet from "./Earning";
import HoldingWallet from "./Holding";
import TradingWallet from "./Trading";
import App from "../App";
import CalculSolde from "./CalculSolde";

//Component return div liste elements tab
function DisplayWallet(props) {
  let usedtab = props.tab;
  let i=0;

  let tmp=[];

      console.log(props.type);
      
      usedtab.map((asset)=>{
 
        switch (props.type) {
          case "hold":
          case "main" :
            tmp[i] = 
          <li key={'hold_'+asset.tokenname}>
            token :{asset.tokenname}, qtty :{asset.quantity}, value :
            {asset.value}
          </li>;
            i++;
            break;
          
          case "earn":
          tmp[i] = 
            <li key={'earn_'+asset.tokenname}>
              token :{asset.tokenname}, qtty :{asset.quantity}, value :
              {asset.value}, daily reward : {asset.earnedValueDaily}, apr : {asset.apr}
            </li>;
            i++;
            break;
          case "trade":
            tmp[i] = 
          <li key={'trade_'+asset.tokenname}>
            token :{asset.token}, qtty :{asset.quantity}, value :
            {asset.value}, entryprice :{asset.entryPrice}, perfo : {asset.perf}
          </li>
              i++;
              break;
      }
    }
     );
      return (
        <ul id={'list_token_'+props.type}>{tmp}</ul>
      );
  }

export default DisplayWallet;
