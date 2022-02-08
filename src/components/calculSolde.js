import React from "react";
import MainWallet from "./Main";
import EarningWallet from "./Earning";
import HoldingWallet from "./Holding";
import TradingWallet from "./Trading";
import App from "../App";


function CalculSolde(props) {
  let tmp = 0;
  let usedtab = props.tab;
  let listTokens = usedtab.map((x) => {
    tmp+= x.value});
    console.log(listTokens);
  return (<p> Solde : {tmp}</p>)
}

export default CalculSolde;
