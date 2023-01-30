import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom"; 
import User from './User';

const withRouter = WrappedComponent => props => {
  const location = useLocation();
  // other hooks

  return (
    <User location = {location}/>
  );
};

function Login(props){
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    //bool datamatchdb check si credentials valides
    let datamatchDB = true;
    if(datamatchDB){
      //Si user connu on authorise la connexion et on passe le tmp isLoggedIn en true pour pouvir le commmuniquer ensuite à <User/>
      console.log("submit");
      navigate('/',{data:{islogged:true,email:email}});
    }
  };

    return (
        <div>
            <Link to="/">Home</Link>
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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