import React from 'react'
import useCounterHook from './counterHook';
export default function ButtonCounter2() {
    const [count,inc,dec,reset]=useCounterHook();
    
    return (
        <div className='betterview'>
            <h1>ButtonCounter2</h1>
            <h1>Count:{count}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
