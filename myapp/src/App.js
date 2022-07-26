import logo from './logo.svg';
import './App.css';
import React from 'react';
import ButtonCounter from './ButtonCounter';
import H1Counter from './H1Counter';
function App() {
  
  return (
    <div className="App">
      <h1>Hello ReactJS Application development</h1>
      <ButtonCounter></ButtonCounter>
      <H1Counter></H1Counter>
    </div>
  );
}

export default App;
