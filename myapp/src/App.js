import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './Counter';
function App() {
  const [name, setname] = React.useState('')
  function handleFirstname(e){
    setname(e.target.value)
  }
  const [x, setX] = React.useState(10)
  return (
    <div className="App">
      <h1>Hello ReactJS Application development</h1>
      <input type="text" onChange={handleFirstname} />
      <br />
      <input type="text" onChange={(e)=>{setX(e.target.value)}} />
      <h1>{name}</h1>
      <Counter x={x}></Counter>
    </div>
  );
}

export default App;
