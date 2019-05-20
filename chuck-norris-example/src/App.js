import React from 'react';
import './App.css';
import Jokes from "./components/jokes";

function App() {
  return (
    <div className="App">
      <Jokes amount={1} />
    </div>
  );
}

export default App;
