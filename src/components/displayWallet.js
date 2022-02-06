import React from "react";
import MainWallet from "./Main";
import EarningWallet from "./Earning";
import HoldingWallet from "./Holding";
import TradingWallet from "./Trading";
import App from "../App";

//Component return div liste elements tab
function displayWallet(props) {
  switch (props.type) {
    case "main" || "hold":
      return (
        <ul>
          <p>{props.type} details : </p>
          {props.tab.map((asset) => {
            return (
              <li>
                token :{asset.token.name}, qtty :{asset.qtty}, value :
                {asset.value}
              </li>
            );
          })}
        </ul>
      );
    case "earn":
      return (
        <ul>
          <p>{props.type} details : </p>
          {props.tab.map((asset) => {
            return (
              <li>
                token :{asset.token}, qtty :{asset.qtty}, value :{asset.value},
                apr: {asset.apr}, estimation gain/J :{asset.earnedValueDaily}
              </li>
            );
          })}
        </ul>
      );
    case "trade":
      return (
        <ul>
          <p>{props.type} details : </p>
          {props.tab.map((asset) => {
            return (
              <li>
                token :{asset.token}, qtty :{asset.quantity}, value :
                {asset.value}, entryprice :{asset.entryPrice}
                {asset.entryPrice}, perfo : {asset.perf}
              </li>
            );
          })}
        </ul>
      );
    default:
      console.log("suce");
  }
}

export default displayWallet;
