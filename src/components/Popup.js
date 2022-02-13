import React from "react";

class Popup extends React.Component{
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>

            <div id='managewindow'>
              <form method="post">
                <label>Nom :</label>
                <select>
                    <option defaultValue="">Holding</option>
                    <option value="">Earning</option>
                    <option value="">Trading</option>
                </select>
                <button onClick={
                    ()=>{
                        let asset = {
                            tokenname:'tokenname',
                            value:100,
                            quantity:1
                        }
                            this.props.onClick(asset)
                        }
                }>Enregistrer</button>
                </form>
            </div>

          <button onClick={this.props.closePopup}>Annuler</button>
          </div>
        </div>
      );
    }
  }

  export default Popup;