import React from "react";

//Component return div liste elements tab
function DisplayWallet(props) {
  let i=0;
  let tmpsolde=0;
  let tmp=[];

      console.log(props.type);
      
      props.tab.map((asset)=>{
        tmpsolde += asset.value;
        switch (props.type) {
          case "hold":
          case "main":
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
        <div id='display'>
          <h2>Solde : {tmpsolde}</h2>
          <ul id={'list_token_'+props.type}>{tmp}</ul>
        </div>
      );
  }

export default DisplayWallet;
