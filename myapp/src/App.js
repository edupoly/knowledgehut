import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store'
import Todolist from './Todolist';
function App() {
  
  return (
    <Provider store={store}>
      <div className="betterview">
        <h1>Hello ReactJS Application development</h1>
        <Todolist></Todolist>
      </div>
    </Provider>
  );
}

export default App;
