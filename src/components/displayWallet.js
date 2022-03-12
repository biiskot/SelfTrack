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
                let tmpearneddaily = ((asset.value*(asset.APR/100))/365).toFixed(2);
                totalearn += tmpearneddaily;
                tmp[i] = 
                <li key={'earn_'+asset.tokenname}>
                  {asset.tokenname} {asset.symbol.toUpperCase()} {asset.quantity}, {asset.value} <br/>
                  1 {asset.tokenname}: {asset.price}, APR : {asset.APR}, Daily Rewards : {tmpearneddaily}
                </li>;
                i++;
                break;

              case "trade":
                tmp[i] = 
              <li key={'trade_'+asset.tokenname}>
                token :{asset.tokenname}, qtty :{asset.quantity}, value :
                {asset.value}, <br/>entryprice :{asset.entryPrice}<br/>Performance : {(((asset.price*asset.quantity)-(asset.entryPrice*asset.quantity))/(asset.entryPrice*asset.quantity))*100}%
              </li>
                  i++;
                break;

              default:
                break;
          }
          return null;
        }
        );
        if(props.type ==='earn'){
          return (
            <div id='display'>
              
              <h2>Solde : {tmpsolde}$</h2>
              <h4>Est. gains daily : {totalearn}$</h4>
              <ul id={'list_token_'+props.type}>{tmp}</ul>
            </div>
          );
        }
        else if(props.type ==='trade'){
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
              
              <h2>Solde : {tmpsolde}$</h2>
              <ul id={'list_token_'+props.type}>{tmp}</ul>
            </div>
          );
        }
      }
  }

export default DisplayWallet;
