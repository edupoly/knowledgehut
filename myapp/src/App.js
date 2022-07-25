import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './Counter';
import Foodcart from './Foodcart';
function App() {
  
  return (
    <div className="App">
      <h1>Hello ReactJS Application development</h1>
      <Foodcart></Foodcart>
      <Counter></Counter>
    </div>
  );
}

export default App;
