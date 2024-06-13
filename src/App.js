import React, { Component } from 'react';
import RollDice from './rollDice'
import "./die.css";
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <RollDice /> 
        </div>
    )
  }
}
export default App;