import React from "react";
import MainWallet from "./Main";
import EarningWallet from "./Earning";
import HoldingWallet from "./Holding";
import TradingWallet from "./Trading";
import App from "../App";

function TabWalletToShowableTab(props) {
    let tabtmp = props.tab;
    let newtab = tabtmp.map(x => {
        return {value:x.value, quantity: x.quantity, token : x.token} 
    });
return(
    newtab
)
}