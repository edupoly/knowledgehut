import React, { Component } from 'react'
import CounterHOC from './CounterHOC'

class ButtonCounter extends Component {
    
  render() {
    return (
      <div className='betterview'>
        <h1>Button Counter</h1>
        <h2>Count:{this.props.count}</h2>
        <button onClick={this.props.inc}>Increment</button>
        <button onClick={this.props.dec}>Decrement</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    )
  }
}

export default CounterHOC(ButtonCounter)