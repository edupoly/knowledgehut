
import React from 'react'
import {connect} from 'react-redux'
function Counter(props) {
    console.log(props)
  return (
    <div className='betterview'>
        <h1>Counter:{props.counter.count}</h1>
        <button onClick={()=>{props.dispatch({type:'INC'})}}>Increment</button>&nbsp;&nbsp;&nbsp;
        <button>Decrement</button>&nbsp;&nbsp;&nbsp;
    </div>
  )
}

export default connect(function(st){return st})(Counter)