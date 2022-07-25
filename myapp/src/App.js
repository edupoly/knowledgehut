
import './App.css';
import React from 'react';
import C1 from './C1';
import mycontext from './MyContext';
import CC1 from './CC1';
const mydetails = {
  name:'alok',
  place:'india',
  food:'biryani'
}
function App() {
  const [myname,setMyname] = React.useState('rahul')
  return (
    <mycontext.Provider value={mydetails}>
      <div className="betterview">
        <h1>Hello ReactJS Application development</h1>
        <CC1></CC1>
        <h2>{myname}</h2>
        <C1 myname={myname}></C1>
      </div>
    </mycontext.Provider>
  );
}

export default App;
