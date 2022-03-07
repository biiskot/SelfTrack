import react from "react";
import React from "react";

class DynamicForm extends React.Component{
    constructor(props){
       super(props);
    }

    render(){ 
        let tmpState = {};
        if(this.props.wallet === "earn"){
            return(
                <div id="DynaEarn">
                    <label>APR</label>
                    <input type='number' step ="0.1" placeholder='-- %' onChange={
                        event => {
                            tmpState.APR = event.target.value;
                        }
                    }/>
                </div>
            )
        }
        else if (this.props.wallet === "trade"){
            return(
                <div id="DynaTrade">
                    <label>Entry Price :</label>
                     <input type='number' step="0.01" placeholder='entry' onChange={
                        event => {
                            tmpState.entryPrice = event.target.value;
                        }
                    }/>
                </div>
            )
        }
        else {
            return null;
        }
        console.log('ajout dynamique : ', tmpState);
        this.props.fullfilled(tmpState);
    }
}

export default DynamicForm ;