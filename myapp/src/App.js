
import './App.css';
import React from 'react';
import Xyz from './Xyz'
import Abc from './Abc';
function App() {
  const [myname,setmyname] = React.useState('prateek')
  return (
    <div className="betterview">
      <h1>Hello ReactJS Application development</h1>
      <Xyz myname={myname}></Xyz>
      <Abc>{myname}</Abc>
    </div>
  );
}

export default App;
