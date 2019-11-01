import React from 'react';
import PlayerList from "./components/PlayerList"
import './App.css';
import Toggle from "./components/Toggle"

function App() {
  return (
    <div className="App">
      <Toggle />
     <PlayerList/>

    </div>
  );
}

export default App;
