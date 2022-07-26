import logo from './logo.svg';
import './App.css';
import React from 'react';
import ButtonCounter from './ButtonCounter';
import H1Counter from './H1Counter';
import ButtonCounter2 from './ButtonCounter2';
import H1Counter2 from './H1Counter2';
function App() {
  
  return (
    <div className="App">
      <h1>Hello ReactJS Application development</h1>
      <ButtonCounter2></ButtonCounter2>
      <H1Counter2></H1Counter2>
      <ButtonCounter></ButtonCounter>
      <H1Counter></H1Counter>
    </div>
  );
}

export default App;
