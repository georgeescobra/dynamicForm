import React, { Component } from 'react';
import './App.css';
import Formpage from "./components/Formpage";

class App extends Component {
  render(){
    return (
      <div style={{
        backgroundColor: "grey",
        height : "inherit",
        display: "flex",
        flexDirection : "row",
        flexWrap : "nowrap",
        justifyContent : "center"
      }}>
        <Formpage /> 
      </div>
    );
  }
}

export default App;
