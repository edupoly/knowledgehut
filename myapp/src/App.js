import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import {Link,Outlet} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
      <h1>Hello ReactJS Application development</h1>
      <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/aboutus">aboutus</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/contactus">contactus</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/courses">Courses</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/products">Products</Link>&nbsp;&nbsp;&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
