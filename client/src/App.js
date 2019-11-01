import React from 'react';
import PlayerList from "./components/PlayerList"
import './App.css';
import Toggle from "./components/Toggle"



export const sum = (a, b) =>{
  return a+b;
  }

  
function App() {
  return (
    <div className="App">
      <Toggle />
     <PlayerList/>

    </div>
  );
}

export default App;
