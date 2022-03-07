import React from "react";

//Component return div liste elements tab
function DisplayWallet(props) {
  let i=0;
  let tmpsolde=0;
  let tmp=[];
  let totalearn=0;

      if(props.tab.length < 1) {
        return (
          <h4>Click on Manage button to add an asset</h4>
        )
      }
      else{
          props.tab.map((asset)=>{
            tmpsolde += asset.value;
            switch (props.type) {
              case "hold":
                tmp[i] = 
              <li key={'hold_'+asset.tokenname}>
                token :{asset.tokenname}, qtty :{asset.quantity}, value :
                {asset.value}
              </li>;
                i++;
                break;
              
              case "earn":
              totalearn+=asset.earnedValueDaily;
              tmp[i] = 
                <li key={'earn_'+asset.tokenname}>
                  {asset.tokenname} {asset.symbol.toUpperCase()} {asset.quantity}, {asset.value} <br/>
                  1 {asset.tokenname}: {asset.price}, APR : {asset.apr}, Daily Rewards : {asset.earnedValueDaily}
                </li>;
                i++;
                break;
              case "trade":
                tmp[i] = 
              <li key={'trade_'+asset.tokenname}>
                token :{asset.tokenname}, qtty :{asset.quantity}, value :
                {asset.value}, entryprice :{asset.entryPrice}, perfo : {asset.perf}
              </li>
                  i++;
                  break;
          }
        }
        );
        if(props.type =='earn'){
          return (
            <div id='display'>
              
              <h2>Solde : {tmpsolde}$</h2>
              <h4>Est. gains daily : {totalearn}$</h4>
              <ul id={'list_token_'+props.type}>{tmp}</ul>
            </div>
          );
        }
        else if(props.type =='trade'){
          return (
            <div id='display'>
              
              <h2>Valeur totale trades : {tmpsolde}$</h2>
              <h4>Perf totale : {totalearn}$</h4>
              <ul id={'list_token_'+props.type}>{tmp}</ul>
            </div>
          );
        }
        else{
          return (
            <div id='display'>
              
              <h2>Solde :</h2>
              <ul id={'list_token_'+props.type}>{tmp}</ul>
            </div>
          );
        }
      }
  }

export default DisplayWallet;
