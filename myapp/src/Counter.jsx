import React from 'react'
const initialState = {
    count:1
}
function counterreducer(state,action){
    if(action.type==='INC'){
        return {...state,count:state.count+1}
    }
    if(action.type==='DEC'){
        return {...state,count:state.count-1}
    }
    return state
}
function Counter() {
    const [state, dispatch] = React.useReducer(counterreducer,initialState)
    return (
        <div className='betterview'>
            <h1>Counter:{state.count}</h1>
            <button onClick={()=>{dispatch({type:'INC'})}}>Increment</button>
            <button onClick={()=>{dispatch({type:'DEC'})}}>Decrement</button>
        </div>
    )
}

export default Counter