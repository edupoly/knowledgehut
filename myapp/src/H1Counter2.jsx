import React from 'react'
import useCounterHook from './counterHook'
export default function H1Counter2() {
    const [count,inc,dec,reset]=useCounterHook()

    return (
        <div className='betterview'>
            <h1>H1Counter2</h1>
            <h1>Count:{count}</h1>
            <h1 onClick={inc}>Increment</h1>
            <h1 onClick={dec}>Decrement</h1>
            <h1 onClick={reset}>reset</h1>
        </div>
  )
}
