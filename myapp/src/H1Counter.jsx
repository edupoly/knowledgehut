import React, { Component } from 'react'
import CounterHOC from './CounterHOC'
class H1Counter extends Component {
    
  render() {
    return (
        <div className='betterview'>
            <h1>H1Counter</h1>  
            <h1>Count:{this.props.count}</h1>
            <h1 onClick={this.props.inc}>Increment</h1>
            <h1 onClick={this.props.dec}>Decrement</h1>
            <h1 onClick={this.props.reset}>reset</h1>
        </div>

    )
  }
}
export default CounterHOC(H1Counter)