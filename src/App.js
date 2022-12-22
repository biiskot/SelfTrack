import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import User from "./components/User";
import Inscription from './components/Inscription';
import Login from './components/Login';

class App extends React.Component {
  constructor(){
    super();
  }


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
