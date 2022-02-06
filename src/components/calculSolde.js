import React from "react";
import MainWallet from "./Main";
import EarningWallet from "./Earning";
import HoldingWallet from "./Holding";
import TradingWallet from "./Trading";
import App from "../App";

function calculSolde(props) {
  let solde = 0;
  props.tab.map((x) => (solde += x.value));
  return <h2> Solde : {solde}</h2>;
}

export default calculSolde;
