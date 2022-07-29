import logo from './logo.svg';
import './App.css';
import React from 'react';
import store from './store/store';
import {Provider} from 'react-redux';
import Restaurants from './Restaurents';
import { Outlet } from 'react-router';
function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
