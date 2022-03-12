import React from "react";

class DynamicForm extends React.Component{
    constructor(){
        super()
        this.state ={
            newprop :0
        }
    }
   
    render(){ 
        if(this.props.wallet === "earn"){
            return(
                <div id="DynaEarn">
                    <label>APR</label>
                    <input type='number' step ="0.1" placeholder='-- %' onChange={
                        event => {                      
                            console.log('ajout dynamique : ', event.target.value);
                            this.setState({
                                newprop: event.target.value
                            }, () => {
                                this.props.fullfilled(this.state.newprop,this.props.wallet);
                            });
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
                            this.setState({
                                newprop: event.target.value
                            }, () => {
                                this.props.fullfilled(this.state.newprop,this.props.wallet);
                            });
                        }
                    }/>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default DynamicForm ;