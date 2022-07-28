import logo from './logo.svg';
import './App.css';
import React from 'react';
import store from './store/store';
import {Provider} from 'react-redux'
import Counter from './Counter';
function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello ReactJS Application development</h1>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
