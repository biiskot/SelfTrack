import React, { useState } from 'react';
import { Link } from "react-router-dom"; 


function Login(props){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //bool datamatchdb check si credentials valides
    let datamatchDB = true;
    if(datamatchDB){
        this.props.boolLogged = true;
     //   <App/>
    }
  };

    return (
        <div>
            <Link to="/">Home</Link>
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">Login</button>
            </form>
            <p>Pas encore de compte ? Inscrivez-vous en <Link to='/inscription'>cliquant ici</Link></p>
            
        </div>
      )
  
}

export default Login;