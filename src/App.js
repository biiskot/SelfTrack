
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import React from 'react';
import User from "./components/User";
import Inscription from './components/Inscription';
import Login from './components/Login';

class App extends React.Component {

  render(){
    return(
      <Router>
      <div className="App">
         <Routes>
            <Route exact path="/" element={<User/>}/>
            <Route exact path="/inscription" element ={<Inscription/>}/>
            <Route exact path="/login" element ={<Login/>}/>
          </Routes>
      </div>
    </Router>
    )
}
}

export default App;
