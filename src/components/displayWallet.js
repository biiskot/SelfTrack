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
  let tmp=[];
  let i=0;

      console.log(props.type);
      i=0;
      let listTokens = usedtab.map((asset)=>{

        switch (props.type) {
          case "main" || "hold":
            tmp[i] = 
            <li key={asset.tokenname}>
              token :{asset.tokenname}, qtty :{asset.quantity}, value :
              {asset.value}
            </li>;
            i++;
            break;
          case "earn":
            tmp[i] = 
          <li key={asset.tokenname}>
            token :{asset.tokenname}, qtty :{asset.quantity}, value :
            {asset.value}
          </li>;
            i++;
            break;
          case "trade":
            tmp[i] = 
            <li>
              token :{asset.token}, qtty :{asset.quantity}, value :
              {asset.value}, entryprice :{asset.entryPrice}
              {asset.entryPrice}, perfo : {asset.perf}
            </li>
              i++;
              break;
      }
    }
     );
     console.log(tmp);
      return (
        <ul id='listtokens'>{tmp}</ul>
      );
    
  }

export default DisplayWallet;
